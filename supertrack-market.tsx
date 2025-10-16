import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart, History, TrendingUp, Plus, X, Camera, Barcode, Calendar, Package, ChevronRight, ArrowUp, ArrowDown, Minus, Store, Scan } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function SuperTrackMarket() {
  const [activeTab, setActiveTab] = useState('nueva');
  const [currentPurchase, setCurrentPurchase] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [showProductForm, setShowProductForm] = useState(false);
  const [selectedPurchase, setSelectedPurchase] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [supermarketName, setSupermarketName] = useState('');
  const [purchaseStarted, setPurchaseStarted] = useState(false);
  
  const [productForm, setProductForm] = useState({
    name: '',
    price: '',
    barcode: '',
    image: null,
    quantity: '1'
  });

  const [barcodeInput, setBarcodeInput] = useState('');
  const [showBarcodeScanner, setShowBarcodeScanner] = useState(true);
  const [foundProduct, setFoundProduct] = useState(null);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedHistory = localStorage.getItem('supertrack_history');
    if (savedHistory) {
      try {
        setPurchaseHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Error al cargar historial:', e);
      }
    }
  }, []);

  useEffect(() => {
    if (purchaseHistory.length > 0) {
      try {
        localStorage.setItem('supertrack_history', JSON.stringify(purchaseHistory));
      } catch (e) {
        console.error('Error al guardar historial:', e);
      }
    }
  }, [purchaseHistory]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/\./g, '').replace(',', '.'));
  };

  const handlePriceInput = (e) => {
    let value = e.target.value;
    value = value.replace(/[^\d,]/g, '');
    
    const parts = value.split(',');
    let integerPart = parts[0];
    const decimalPart = parts[1];
    
    if (integerPart.length > 3) {
      integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    
    let formattedValue = integerPart;
    if (parts.length > 1) {
      formattedValue += ',' + (decimalPart || '').slice(0, 2);
    }
    
    setProductForm({ ...productForm, price: formattedValue });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductForm({ ...productForm, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const startNewPurchase = () => {
    if (supermarketName.trim()) {
      setPurchaseStarted(true);
    }
  };

  const searchProductByBarcode = (barcode) => {
    if (!barcode) return null;
    
    let foundProduct = null;
    for (let i = 0; i < purchaseHistory.length; i++) {
      const purchase = purchaseHistory[i];
      if (!purchase.products) continue;
      
      for (let j = 0; j < purchase.products.length; j++) {
        const product = purchase.products[j];
        if (product.barcode === barcode) {
          foundProduct = {
            name: product.name,
            price: product.price,
            barcode: product.barcode,
            image: product.image
          };
          break;
        }
      }
      if (foundProduct) break;
    }
    return foundProduct;
  };

  const handleBarcodeSearch = () => {
    const trimmedBarcode = barcodeInput.trim();
    if (!trimmedBarcode) return;

    const product = searchProductByBarcode(trimmedBarcode);
    
    if (product) {
      setFoundProduct(product);
      setProductForm({
        name: product.name,
        price: formatPrice(product.price),
        barcode: product.barcode,
        image: product.image,
        quantity: '1'
      });
      setShowBarcodeScanner(false);
    } else {
      setProductForm({
        name: '',
        price: '',
        barcode: trimmedBarcode,
        image: null,
        quantity: '1'
      });
      setFoundProduct(null);
      setShowBarcodeScanner(false);
    }
  };

  const addProduct = () => {
    if (!productForm.name || !productForm.price) {
      alert('Por favor completa el nombre y precio del producto');
      return;
    }
    
    const priceValue = parsePrice(productForm.price);
    const quantityValue = parseInt(productForm.quantity) || 1;
    
    if (isNaN(priceValue) || priceValue <= 0) {
      alert('Por favor ingresa un precio válido');
      return;
    }
    
    if (quantityValue <= 0) {
      alert('Por favor ingresa una cantidad válida');
      return;
    }
    
    try {
      const newProduct = {
        id: Date.now(),
        name: productForm.name,
        price: priceValue,
        quantity: quantityValue,
        barcode: productForm.barcode || '',
        image: productForm.image || null,
        date: new Date().toISOString()
      };
      
      setCurrentPurchase([...currentPurchase, newProduct]);
      setProductForm({ name: '', price: '', barcode: '', image: null, quantity: '1' });
      setBarcodeInput('');
      setFoundProduct(null);
      setShowBarcodeScanner(true);
      setShowProductForm(false);
    } catch (error) {
      console.error('Error al añadir producto:', error);
      alert('Error al añadir el producto. Por favor intenta nuevamente.');
    }
  };

  const removeProduct = (id) => {
    setCurrentPurchase(currentPurchase.filter(p => p.id !== id));
  };

  const getCurrentTotal = () => {
    return currentPurchase.reduce((sum, p) => {
      const price = p.price || 0;
      const quantity = p.quantity || 1;
      return sum + (price * quantity);
    }, 0);
  };

  const finalizePurchase = () => {
    if (currentPurchase.length > 0) {
      const total = getCurrentTotal();
      const purchase = {
        id: Date.now(),
        date: new Date().toISOString(),
        supermarket: supermarketName,
        products: currentPurchase.map(p => ({...p})),
        total: total
      };
      const newHistory = [purchase, ...purchaseHistory];
      setPurchaseHistory(newHistory);
      localStorage.setItem('supertrack_history', JSON.stringify(newHistory));
      
      setCurrentPurchase([]);
      setSupermarketName('');
      setPurchaseStarted(false);
      setShowProductForm(false);
      setShowBarcodeScanner(true);
      setBarcodeInput('');
      setFoundProduct(null);
      setProductForm({ name: '', price: '', barcode: '', image: null, quantity: '1' });
      
      alert(`✅ Compra finalizada!\nTotal: $${formatPrice(total)}`);
    }
  };

  const cancelPurchase = () => {
    if (currentPurchase.length > 0) {
      if (window.confirm('¿Deseas cancelar esta compra? Se perderán todos los productos añadidos.')) {
        setCurrentPurchase([]);
        setSupermarketName('');
        setShowProductForm(false);
        setPurchaseStarted(false);
        setShowBarcodeScanner(true);
        setBarcodeInput('');
        setFoundProduct(null);
        setProductForm({ name: '', price: '', barcode: '', image: null, quantity: '1' });
      }
    } else {
      setCurrentPurchase([]);
      setSupermarketName('');
      setShowProductForm(false);
      setPurchaseStarted(false);
      setShowBarcodeScanner(true);
      setBarcodeInput('');
      setFoundProduct(null);
      setProductForm({ name: '', price: '', barcode: '', image: null, quantity: '1' });
    }
  };

  const getAllTrackedProducts = () => {
    const productMap = {};
    
    purchaseHistory.forEach(purchase => {
      if (!purchase.products) return;
      
      purchase.products.forEach(product => {
        if (product.barcode) {
          if (!productMap[product.barcode]) {
            productMap[product.barcode] = {
              name: product.name,
              barcode: product.barcode,
              image: product.image,
              prices: []
            };
          }
          productMap[product.barcode].prices.push({
            date: purchase.date,
            price: product.price,
            supermarket: purchase.supermarket
          });
        }
      });
    });
    
    return Object.values(productMap).map(product => {
      const sortedPrices = product.prices.sort((a, b) => new Date(a.date) - new Date(b.date));
      const latestPrice = sortedPrices[sortedPrices.length - 1].price;
      const previousPrice = sortedPrices.length > 1 ? sortedPrices[sortedPrices.length - 2].price : latestPrice;
      const change = latestPrice - previousPrice;
      
      return {
        ...product,
        latestPrice,
        previousPrice,
        change,
        priceHistory: sortedPrices
      };
    });
  };

  const clearAllData = () => {
    if (window.confirm('⚠️ ¿Estás seguro de que deseas borrar TODOS los datos? Esta acción no se puede deshacer.')) {
      localStorage.removeItem('supertrack_history');
      setPurchaseHistory([]);
      setCurrentPurchase([]);
      setSupermarketName('');
      setSelectedPurchase(null);
      setSelectedProduct(null);
      alert('✅ Todos los datos han sido borrados');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <ShoppingCart className="w-8 h-8" />
          SuperTrack Market
        </h1>
        <p className="text-blue-100 mt-1">Controla tus compras inteligentemente</p>
      </div>

      <div className="bg-white shadow-md">
        <div className="flex">
          <button
            onClick={() => setActiveTab('nueva')}
            className={`flex-1 py-4 flex items-center justify-center gap-2 font-semibold transition-colors ${
              activeTab === 'nueva' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Plus className="w-5 h-5" />
            Nueva Compra
          </button>
          <button
            onClick={() => setActiveTab('historial')}
            className={`flex-1 py-4 flex items-center justify-center gap-2 font-semibold transition-colors ${
              activeTab === 'historial' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <History className="w-5 h-5" />
            Historial
          </button>
          <button
            onClick={() => setActiveTab('precios')}
            className={`flex-1 py-4 flex items-center justify-center gap-2 font-semibold transition-colors ${
              activeTab === 'precios' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            Precios
          </button>
        </div>
      </div>

      <div className="p-4 pb-24">
        {activeTab === 'nueva' && (
          <div className="space-y-4">
            {!purchaseStarted ? (
              <div className="bg-white rounded-xl p-8 shadow-lg text-center space-y-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Store className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Nueva Compra</h2>
                  <p className="text-gray-500">¿En qué supermercado vas a comprar?</p>
                </div>
                <div>
                  <input
                    type="text"
                    value={supermarketName}
                    onChange={(e) => setSupermarketName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        startNewPurchase();
                      }
                    }}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg"
                    placeholder="Ej: Carrefour, Coto, Día..."
                    autoFocus
                  />
                </div>
                <button
                  onClick={startNewPurchase}
                  disabled={!supermarketName.trim()}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Comenzar Compra
                </button>
              </div>
            ) : (
              <>
                <div className="bg-white rounded-xl p-4 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Store className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Comprando en</p>
                      <p className="font-bold text-gray-800">{supermarketName}</p>
                    </div>
                  </div>
                  <button
                    onClick={cancelPurchase}
                    className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 shadow-lg">
                  <p className="text-sm opacity-90">Total Actual</p>
                  <p className="text-4xl font-bold mt-1">${formatPrice(getCurrentTotal())}</p>
                  <p className="text-sm mt-2 opacity-90">{currentPurchase.length} productos</p>
                </div>

                <div className="space-y-3">
                  {currentPurchase.map((product, index) => (
                    <div key={`${product.id}-${index}`} className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4">
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                          <Package className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.barcode || 'Sin código'}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-gray-600">Cant: {product.quantity || 1}</span>
                          <span className="text-sm text-gray-400">×</span>
                          <span className="text-sm text-gray-600">${formatPrice(product.price)}</span>
                        </div>
                        <p className="text-lg font-bold text-blue-600 mt-1">${formatPrice(product.price * (product.quantity || 1))}</p>
                      </div>
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>

                {!showProductForm && (
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        setShowProductForm(true);
                        setShowBarcodeScanner(true);
                        setBarcodeInput('');
                        setFoundProduct(null);
                      }}
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Plus className="w-5 h-5" />
                      Añadir Producto
                    </button>
                    {currentPurchase.length > 0 && (
                      <button
                        onClick={finalizePurchase}
                        className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:bg-green-700 transition-colors"
                      >
                        Finalizar Compra - ${formatPrice(getCurrentTotal())}
                      </button>
                    )}
                  </div>
                )}

                {showProductForm && (
                  <div className="bg-white rounded-xl p-6 shadow-lg space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">
                        {showBarcodeScanner ? 'Escanear Código' : foundProduct ? 'Producto Encontrado' : 'Nuevo Producto'}
                      </h3>
                      <button
                        onClick={() => {
                          setShowProductForm(false);
                          setShowBarcodeScanner(true);
                          setBarcodeInput('');
                          setFoundProduct(null);
                          setProductForm({ name: '', price: '', barcode: '', image: null, quantity: '1' });
                        }}
                        className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {showBarcodeScanner ? (
                      <div className="space-y-4">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center border-2 border-blue-200">
                          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Barcode className="w-10 h-10 text-white" />
                          </div>
                          <p className="text-gray-800 font-bold text-lg mb-2">Ingresa el código de barras</p>
                          <p className="text-sm text-gray-600">Si el producto ya existe en tu historial, cargaremos automáticamente su información</p>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Código de barras del producto</label>
                          <div className="relative">
                            <input
                              type="text"
                              inputMode="numeric"
                              value={barcodeInput}
                              onChange={(e) => setBarcodeInput(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  e.preventDefault();
                                  handleBarcodeSearch();
                                }
                              }}
                              className="w-full px-4 py-4 pr-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-mono"
                              placeholder="Ej: 7790001234567"
                              autoFocus
                            />
                            <Barcode className="absolute right-4 top-4 w-6 h-6 text-gray-400" />
                          </div>
                          <p className="text-xs text-gray-500 mt-2">💡 Tip: Los códigos de barras suelen tener 13 dígitos</p>
                        </div>

                        <button
                          onClick={handleBarcodeSearch}
                          disabled={!barcodeInput.trim()}
                          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          <Scan className="w-5 h-5" />
                          Buscar Producto
                        </button>

                        <button
                          onClick={() => {
                            setShowBarcodeScanner(false);
                            setProductForm({ name: '', price: '', barcode: barcodeInput, image: null, quantity: '1' });
                          }}
                          className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                        >
                          <Package className="w-5 h-5" />
                          Continuar sin código de barras
                        </button>
                      </div>
                    ) : (
                      <>
                        {foundProduct && (
                          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 mb-4">
                            <div className="flex items-center gap-2 text-green-700 mb-2">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm">✓</span>
                              </div>
                              <p className="font-semibold">Producto encontrado en la base de datos</p>
                            </div>
                            <p className="text-sm text-green-600">Puedes editar el precio si ha cambiado</p>
                          </div>
                        )}

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Código de barras</label>
                          <div className="relative">
                            <input
                              type="text"
                              value={productForm.barcode}
                              onChange={(e) => setProductForm({ ...productForm, barcode: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                              placeholder="Código detectado"
                              readOnly
                            />
                            <Barcode className="absolute right-3 top-3 w-6 h-6 text-gray-400" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del producto</label>
                          <input
                            type="text"
                            value={productForm.name}
                            onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Ej: Leche entera 1L"
                            autoFocus={!foundProduct}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Precio {foundProduct && <span className="text-blue-600">(editable)</span>}
                          </label>
                          <input
                            type="text"
                            value={productForm.price}
                            onChange={handlePriceInput}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Ej: 1.250,50 o 150,00"
                            autoFocus={foundProduct ? true : false}
                          />
                          <p className="text-xs text-gray-500 mt-1">Usa coma para decimales (,) y punto para miles (.)</p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Cantidad</label>
                          <input
                            type="number"
                            min="1"
                            value={productForm.quantity}
                            onChange={(e) => setProductForm({ ...productForm, quantity: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                            placeholder="1"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Foto del producto</label>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                          <button
                            onClick={() => fileInputRef.current.click()}
                            type="button"
                            className="w-full border-2 border-dashed border-gray-300 rounded-lg py-8 hover:border-blue-500 transition-colors flex flex-col items-center justify-center gap-2"
                          >
                            {productForm.image ? (
                              <img src={productForm.image} alt="Preview" className="max-h-32 rounded-lg" />
                            ) : (
                              <>
                                <Camera className="w-8 h-8 text-gray-400" />
                                <span className="text-sm text-gray-500">
                                  {foundProduct ? 'Cambiar foto del producto' : 'Toca para añadir foto'}
                                </span>
                              </>
                            )}
                          </button>
                        </div>

                        <button
                          onClick={addProduct}
                          type="button"
                          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Añadir a la compra
                        </button>

                        <button
                          onClick={() => {
                            setShowBarcodeScanner(true);
                            setBarcodeInput('');
                            setFoundProduct(null);
                            setProductForm({ name: '', price: '', barcode: '', image: null, quantity: '1' });
                          }}
                          className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                        >
                          ← Volver a ingresar código
                        </button>
                      </>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {activeTab === 'historial' && (
          <div className="space-y-4">
            {selectedPurchase ? (
              <div>
                <button
                  onClick={() => setSelectedPurchase(null)}
                  className="mb-4 text-blue-600 font-semibold flex items-center gap-2"
                >
                  ← Volver al historial
                </button>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Store className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{selectedPurchase.supermarket}</h3>
                        <p className="text-gray-500 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(selectedPurchase.date).toLocaleString('es-AR')}
                        </p>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">Total de la compra</p>
                      <p className="text-3xl font-bold text-blue-600">${formatPrice(selectedPurchase.total)}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {selectedPurchase.products.map((product, index) => (
                      <div key={`${product.id}-${index}`} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                            <Package className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{product.name}</h4>
                          <p className="text-sm text-gray-500">{product.barcode || 'Sin código'}</p>
                          <p className="text-sm text-gray-600 mt-1">
                            Cantidad: {product.quantity || 1} × ${formatPrice(product.price)}
                          </p>
                        </div>
                        <p className="text-lg font-bold text-blue-600">${formatPrice(product.price * (product.quantity || 1))}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                {purchaseHistory.length === 0 ? (
                  <div className="bg-white rounded-xl p-12 text-center shadow-lg">
                    <History className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Sin compras registradas</h3>
                    <p className="text-gray-500">Añade tu primera compra para ver el historial</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3">
                      {purchaseHistory.map((purchase, index) => (
                        <button
                          key={`${purchase.id}-${index}`}
                          onClick={() => setSelectedPurchase(purchase)}
                          className="w-full bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <Store className="w-5 h-5 text-blue-600" />
                              </div>
                              <div className="text-left">
                                <p className="font-bold text-gray-800">{purchase.supermarket}</p>
                                <p className="text-sm text-gray-500">{purchase.products?.length || 0} productos</p>
                              </div>
                            </div>
                            <ChevronRight className="w-6 h-6 text-gray-400" />
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500 flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {new Date(purchase.date).toLocaleDateString('es-AR', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                            <p className="text-2xl font-bold text-blue-600">${formatPrice(purchase.total)}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={clearAllData}
                      className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-100 transition-colors mt-4"
                    >
                      Borrar todos los datos
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        )}

        {activeTab === 'precios' && (
          <div className="space-y-4">
            {selectedProduct ? (
              <div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="mb-4 text-blue-600 font-semibold flex items-center gap-2"
                >
                  ← Volver a productos
                </button>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    {selectedProduct.image ? (
                      <img src={selectedProduct.image} alt={selectedProduct.name} className="w-20 h-20 object-cover rounded-lg" />
                    ) : (
                      <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Package className="w-10 h-10 text-gray-400" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h3>
                      <p className="text-gray-500">{selectedProduct.barcode}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={selectedProduct.priceHistory.map(p => ({
                        date: new Date(p.date).toLocaleDateString('es-AR', { month: 'short', day: 'numeric' }),
                        price: p.price
                      }))}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip formatter={(value) => `${formatPrice(value)}`} />
                        <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">Precio Actual</p>
                      <p className="text-2xl font-bold text-blue-600">${formatPrice(selectedProduct.latestPrice)}</p>
                    </div>
                    <div className={`rounded-lg p-4 ${selectedProduct.change > 0 ? 'bg-red-50' : selectedProduct.change < 0 ? 'bg-green-50' : 'bg-gray-50'}`}>
                      <p className="text-sm text-gray-600">Variación</p>
                      <p className={`text-2xl font-bold flex items-center gap-1 ${selectedProduct.change > 0 ? 'text-red-600' : selectedProduct.change < 0 ? 'text-green-600' : 'text-gray-600'}`}>
                        {selectedProduct.change > 0 ? <ArrowUp className="w-5 h-5" /> : selectedProduct.change < 0 ? <ArrowDown className="w-5 h-5" /> : null}
                        ${formatPrice(Math.abs(selectedProduct.change))}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 mb-3">Historial de compras</h4>
                    {selectedProduct.priceHistory.map((record, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800">{record.supermarket}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(record.date).toLocaleDateString('es-AR')}
                          </p>
                        </div>
                        <p className="text-lg font-bold text-blue-600">${formatPrice(record.price)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                {getAllTrackedProducts().length === 0 ? (
                  <div className="bg-white rounded-xl p-12 text-center shadow-lg">
                    <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Sin seguimiento de precios</h3>
                    <p className="text-gray-500">Añade productos con código de barras para hacer seguimiento</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {getAllTrackedProducts().map((product, index) => (
                      <button
                        key={`${product.barcode}-${index}`}
                        onClick={() => setSelectedProduct(product)}
                        className="w-full bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
                      >
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                            <Package className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                        <div className="flex-1 text-left">
                          <h4 className="font-semibold text-gray-800">{product.name}</h4>
                          <p className="text-sm text-gray-500">{product.barcode}</p>
                          <p className="text-lg font-bold text-blue-600 mt-1">${formatPrice(product.latestPrice)}</p>
                        </div>
                        <div className={`flex items-center gap-1 ${product.change > 0 ? 'text-red-600' : product.change < 0 ? 'text-green-600' : 'text-gray-600'}`}>
                          {product.change > 0 ? (
                            <ArrowUp className="w-5 h-5" />
                          ) : product.change < 0 ? (
                            <ArrowDown className="w-5 h-5" />
                          ) : null}
                          <span className="font-bold">${formatPrice(Math.abs(product.change))}</span>
                        </div>
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
                