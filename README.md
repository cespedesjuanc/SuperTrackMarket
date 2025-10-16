# **🛒 SuperTrack Market** 

## **📱 ¿Qué es SuperTrack Market?**

**SuperTrack Market** es una aplicación web completa y gratuita diseñada para ayudarte a **controlar, registrar y analizar tus compras de supermercado** de manera inteligente. Es tu asistente personal de compras que te permite llevar un seguimiento detallado de lo que gastas, dónde lo gastas, y cómo varían los precios de tus productos habituales a lo largo del tiempo.

## **Link de la app:**

https://claude.ai/public/artifacts/a2098a18-1276-4127-ad8e-6854c38d4fba

---


## **🎯 Funcionalidades Principales**

### **1️⃣ NUEVA COMPRA \- Registro Inteligente**

**Inicio de Compra:**

* Registras el **nombre del supermercado** donde estás comprando (Carrefour, Coto, Día, etc.)  
* La app te guía paso a paso para no olvidar ningún detalle

**Registro de Productos:**

* **Código de barras:** Ingresas el código de barras del producto manualmente  
* **Búsqueda automática:** La app busca en tu historial si ya compraste ese producto antes  
* **Autocompletado inteligente:** Si encuentra el producto, carga automáticamente:  
  * Nombre del producto  
  * Último precio registrado  
  * Foto anterior del producto  
* **Edición flexible:** Puedes modificar cualquier dato, especialmente útil cuando el precio cambió  
* **Información completa de cada producto:**  
  * **Nombre:** Descripción del producto (ej: "Leche entera 1L")  
  * **Precio:** Formato argentino con separadores automáticos (ej: $1.250,50)  
  * **Cantidad:** Cuántas unidades estás comprando (1, 2, 3...)  
  * **Código de barras:** Para seguimiento y comparación (opcional)  
  * **Foto:** Imagen del producto para identificación visual (opcional)

**Durante la Compra:**

* **Total en tiempo real:** Ves el total acumulado mientras añades productos  
* **Contador de productos:** Sabes cuántos productos llevas en el carrito  
* **Lista visual:** Cada producto muestra:  
  * Imagen o ícono  
  * Nombre y código de barras  
  * Cantidad × Precio unitario  
  * Subtotal del producto  
* **Eliminar productos:** Puedes quitar productos si te equivocaste  
* **Cancelar compra:** Opción de abandonar la compra si cambias de opinión

**Finalización:**

* **Resumen final:** La app te muestra el total de la compra  
* **Guardado automático:** Toda la información se guarda en tu dispositivo  
* **Historial actualizado:** La compra aparece inmediatamente en tu historial

---

### **2️⃣ HISTORIAL \- Tu Registro Personal**

**Vista General:**

* **Lista cronológica:** Todas tus compras ordenadas de más reciente a más antigua  
* **Información rápida de cada compra:**  
  * Nombre del supermercado con ícono distintivo  
  * Fecha completa (día de la semana, día, mes y año)  
  * Cantidad de productos comprados  
  * Total gastado en formato argentino

**Detalle de Compra:**

* Al hacer clic en cualquier compra, accedes a:  
  * **Encabezado:** Supermercado, fecha y hora exacta  
  * **Total destacado:** Monto total de esa compra en grande  
  * **Lista completa de productos:**  
    * Imagen de cada producto  
    * Nombre y código de barras  
    * Cantidad comprada × Precio unitario  
    * Subtotal de cada producto  
  * **Navegación:** Botón para volver a la lista de compras

**Gestión de Datos:**

* **Persistencia:** Todos los datos se guardan en localStorage del navegador  
* **Disponibilidad:** La información está siempre disponible, incluso sin internet  
* **Borrado de datos:** Opción de eliminar todo el historial si lo necesitas (con confirmación de seguridad)

**Casos de Uso del Historial:**

* Ver cuánto gastaste en una fecha específica  
* Comparar compras entre diferentes supermercados  
* Recordar qué productos compraste la semana pasada  
* Calcular promedios de gasto mensual  
* Revisar si compraste algo específico y cuándo

---

### **3️⃣ SEGUIMIENTO DE PRECIOS \- Análisis Inteligente**

**Vista de Productos:**

* **Lista de productos rastreados:** Solo muestra productos que tienen código de barras  
* **Información instantánea de cada producto:**  
  * Imagen del producto  
  * Nombre y código de barras  
  * Precio actual (último registrado)  
  * **Indicador de variación:**  
    * ⬆️ Flecha roja con monto: El precio subió  
    * ⬇️ Flecha verde con monto: El precio bajó  
    * Sin flecha: El precio se mantiene igual

**Análisis Detallado de Producto:** Al seleccionar un producto, obtienes:

1. **Gráfico de Evolución:**  
   * Gráfico de línea interactivo que muestra cómo cambió el precio a lo largo del tiempo  
   * Eje X: Fechas de tus compras  
   * Eje Y: Precios en formato argentino  
   * Tooltip: Al pasar el mouse, ves el precio exacto en cada fecha  
2. **Comparación de Precios:**  
   * **Precio Actual:** Último precio que pagaste (destacado en azul)  
   * **Variación:** Diferencia con el precio anterior  
     * Fondo rojo si subió  
     * Fondo verde si bajó  
     * Fondo gris si se mantiene  
3. **Historial Completo de Compras:**  
   * Lista detallada de todas las veces que compraste ese producto  
   * Para cada compra muestra:  
     * Nombre del supermercado  
     * Fecha de la compra  
     * Precio pagado en ese momento  
   * Ordenado cronológicamente

**Beneficios del Seguimiento:**

* **Detectar inflación:** Ve cómo suben (o bajan) los precios de tus productos habituales  
* **Comparar supermercados:** Identifica dónde está más barato cada producto  
  * **Optimizar compras:** Compra en el supermercado más económico para cada producto  
* **Planificar presupuesto:** Anticipa cuánto gastarás basándote en tendencias  
* **Tomar decisiones informadas:** Sabe si un precio es bueno o caro comparado con tu historial

---

## **💡 Características Técnicas y de Diseño**

### **Diseño Responsive y Moderno:**

* Interfaz optimizada para dispositivos móviles  
* Gradientes modernos y colores vibrantes  
* Diseño intuitivo con iconos claros (Lucide React)  
* Feedback visual inmediato en cada acción

### **Formato Argentino:**

* **Precios:** Usa punto (.) para miles y coma (,) para decimales  
  * Ejemplo: $1.250,50 o $150,00  
* **Formato automático:** Mientras escribes, la app formatea el precio  
* **Fechas:** En español argentino con formato local completo

### **Almacenamiento Local:**

* **Sin necesidad de internet:** Funciona completamente offline  
* **Sin registro:** No necesitas crear cuenta ni dar datos personales  
* **Privacidad total:** Tus datos están solo en tu dispositivo  
* **Persistencia:** La información se mantiene aunque cierres el navegador

### **Validaciones y Seguridad:**

* Valida que los precios sean números válidos  
* Verifica que las cantidades sean positivas  
* Confirma acciones destructivas (borrar datos, cancelar compra)  
* Manejo de errores con mensajes claros

### **Experiencia de Usuario:**

* **Navegación por pestañas:** Cambio fluido entre secciones  
* **Estados claros:** Sabes siempre en qué paso estás  
* **Mensajes de éxito:** Confirmaciones cuando guardas datos  
* **Autocompletado:** Ahorra tiempo al encontrar productos existentes  
* **Edición flexible:** Puedes cambiar cualquier dato antes de guardar

---

## **🎓 Casos de Uso Reales**

### **Para Familias:**

* Controlar el gasto mensual del supermercado  
* Comparar precios entre diferentes cadenas  
* Planificar el presupuesto familiar  
* Evitar comprar de más al recordar qué compraste la semana pasada

### **Para Estudiantes:**

* Llevar control estricto del presupuesto limitado  
* Encontrar los mejores precios en diferentes supermercados del barrio  
* Registrar gastos para contabilidad personal

### **Para Ahorradores:**

* Detectar cuándo suben los precios de productos específicos  
* Comparar históricamente si un precio está caro o barato  
* Optimizar las compras eligiendo el supermercado más económico  
* Hacer seguimiento de metas de ahorro

### **Para Analíticos:**

* Generar estadísticas de consumo personal  
* Analizar tendencias de precios a lo largo del tiempo  
* Identificar patrones de gasto  
* Tomar decisiones basadas en datos reales

---

## **🚀 Flujo Completo de Uso**

1. **Primera vez:**  
   * Abres la app  
   * Vas a "Nueva Compra"  
   * Ingresas el nombre del supermercado  
   * Añades productos uno por uno con sus detalles  
   * Finalizas la compra  
   * ¡Tu primer registro está guardado\!  
2. **Compras siguientes:**  
   * Ingresas supermercado  
   * Al añadir producto, ingresas su código de barras  
   * La app te dice si ya lo compraste antes  
   * Si lo encuentra: autocompleta nombre, precio y foto  
   * Solo editas el precio si cambió  
   * Añades cantidad  
   * Repites con todos los productos  
   * Finalizas y guardas  
3. **Análisis periódico:**  
   * Vas a "Historial" para ver tus gastos pasados  
   * Vas a "Precios" para analizar variaciones  
   * Identificas tendencias y tomas decisiones  
   * Optimizas tus próximas compras

---

## **✨ Ventajas Únicas**

* ✅ **100% Gratis:** Sin costos, sin publicidad, sin suscripciones 
* ✅ **Sin registro:** No necesitas email ni datos personales 
* ✅ **Offline:** Funciona sin internet 
* ✅ **Privacidad:** Tus datos nunca salen de tu dispositivo 
* ✅ **Formato local:** Diseñado específicamente para Argentina 
* ✅ **Fácil de usar:** Interfaz intuitiva y moderna 
* ✅ **Completa:** Registro, historial y análisis todo en uno 
* ✅ **Inteligente:** Búsqueda y autocompletado automático 
* ✅ **Visual:** Gráficos y colores para análisis rápido 
* ✅ **Flexible:** Puedes usar solo las funciones que necesites

---

## **🎯 En Resumen**

**SuperTrack Market** es tu **compañero inteligente de compras** que te permite:

* ✅ **Registrar** cada compra con todos los detalles  
* ✅ **Recordar** qué compraste, dónde y cuándo  
* ✅ **Comparar** precios entre supermercados y fechas  
* ✅ **Analizar** tendencias de precios con gráficos  
* ✅ **Ahorrar** dinero comprando donde está más barato  
* ✅ **Controlar** tu presupuesto con información real  
* ✅ **Decidir** informadamente basándote en tu historial

Es la **herramienta definitiva** para quien quiere tener **control total** sobre sus gastos de supermercado y tomar **decisiones inteligentes** basadas en datos reales, no en memoria o estimaciones. Todo esto con una interfaz hermosa, moderna y fácil de usar, diseñada específicamente para el mercado argentino.

## **Imagenes de la aplicacion:**

<img width="558" height="543" alt="Screenshot_1" src="https://github.com/user-attachments/assets/b7212c05-b7c0-4a0f-877f-1c1870259c15" /><br>


<img width="576" height="547" alt="Screenshot_2" src="https://github.com/user-attachments/assets/3819fba7-0dbd-4e4c-bb3f-2f8c40090072" /><br>


<img width="569" height="543" alt="Screenshot_3" src="https://github.com/user-attachments/assets/3f69b431-c799-4889-887a-f43469ffbb9e" /><br>

---

# English Version


# **🛒 SuperTrack Market** 

## **📱 What is SuperTrack Market?**

**SuperTrack Market is** a complete and free web application designed to help you **control, record and analyze your supermarket purchases** Smartly. It's your personal shopping assistant that lets you keep detailed track of what you spend, where you spend it, and how the prices of your favorite products vary over time.

## **Link from the app:**

[https://claude.ai/public/artifacts/a2098a18-1276-4127-ad8e-6854c38d4fba](https://claude.ai/public/artifacts/a2098a18-1276-4127-ad8e-6854c38d4fba)

---

## **🎯 Main Features**

### **1️⃣ NEW PURCHASE \- Smart Registration**

**Start of Purchase:**

* You register the **name of the supermarket where** you are shopping (Carrefour, Coto, Día, etc.)  
* The app guides you step by step so you don't forget any details.

**Product Registration:**

* **Bar-code:** You enter the product barcode manually  
* **Automatic search:** The app searches your history to see if you've purchased that product before.  
* **Smart autocomplete:** If the product is found, it automatically loads:  
  * Product name  
  * Last recorded price  
  * Previous product photo  
* **Flexible Edition:** You can modify any data, especially useful when the price changed  
* **Complete information on each product:**  
  * **Name:** Product description (e.g., "Whole milk 1L.")  
  * **Price:** Argentine format with automatic separators (e.g.: $1,250.50)  
  * **Amount:** How many units are you buying (1, 2, 3...)  
  * **Bar-code:** For tracking and comparison (optional)  
  * **Photo:** Product image for visual identification (optional)

**During Purchase:**

* **Total in real time:** You see the running total as you add products  
* **Product counter:** You know how many products you have in your cart  
* **Visual list:** Each product shows:  
  * Image or icon  
  * Name and barcode  
  * Quantity × Unit Price  
  * Product subtotal  
* **Remove products:** You can remove products if you made a mistake.  
* **Cancel purchase:** Option to abandon the purchase if you change your mind

**Finalization:**

* **Final summary:** The app shows you the total purchase  
* **Automatic save:** All information is saved on your device  
* **Updated history:** The purchase appears immediately in your history

---

### **2️⃣ HISTORY \- Your Personal Record**

**Overview:**

* **Chronological list:** All your purchases ordered from most recent to oldest  
* **Quick information about each purchase:**  
  * Supermarket name with distinctive icon  
  * Full date (day of the week, day, month and year)  
  * Quantity of products purchased  
  * Total spent in Argentine format

**Purchase Details:**

* By clicking on any purchase, you agree to:  
  * **Header:** Supermarket, exact date and time  
  * **Total Highlights:** Total amount of that large purchase  
  * **Complete list of products:**  
    * Image of each product  
    * Name and barcode  
    * Quantity purchased × Unit price  
    * Subtotal of each product  
  * **Navigation:** Button to return to the shopping list

**Data Management:**

* **Persistence:** All data is saved in the browser's localStorage  
* **Availability:** Information is always available, even without internet  
* **Data deletion:** Option to delete all history if needed (with security confirmation)

**History Use Cases:**

* See how much you spent on a specific date  
* Compare purchases between different supermarkets  
* Remember what products you bought last week  
* Calculate monthly spending averages  
* Check if and when you purchased something specific

---

### **3️⃣ PRICE TRACKING \- Smart Analysis**

**Product View:**

* **List of tracked products:** Only show products that have a barcode  
* **Instant information on each product:**  
  * Product image  
  * Name and barcode  
  * Current price (last recorded)  
  * **Variation indicator:**  
    * ⬆️ Red arrow with amount: The price went up  
    * ⬇️ Green arrow with amount: The price decreased  
    * No arrow: Price stays the same

**Detailed Product Analysis:** By selecting a product, you get:

1. **Evolution Chart:**  
   * Interactive line chart showing how the price changed over time  
   * X-axis: Dates of your purchases  
   * Y axis: Prices in Argentine format  
   * Tooltip: Hover over the mouse to see the exact price for each date.  
2. **Price Comparison:**  
   * **Current Price:** Last price you paid (highlighted in blue)  
   * **Variation:** Difference with the previous price  
     * Red background if it went up  
     * Green background if it went down  
     * Gray background if maintained  
3. **Complete Purchase History:**  
   * Detailed list of all the times you purchased that product  
   * For each purchase it shows:  
     * Name of the supermarket  
     * Date of purchase  
     * Price paid at that time  
   * Ordered chronologically

**Benefits of Monitoring:**

* **Detect inflation:** See how the prices of your usual products go up (or down)  
* **Compare supermarkets:** Identify where each product is cheapest  
  * **Optimize purchases:** Shop at the cheapest supermarket for each product  
* **Planning a budget:** Anticipate how much you will spend based on trends  
* **Make informed decisions:** Know if a price is good or expensive compared to your history

---

## **💡 Technical and Design Features**

### **Responsive and Modern Design:**

* Mobile-optimized interface  
* Modern gradients and vibrant colors  
* Intuitive design with clear icons (Lucide React)  
* Immediate visual feedback on every action

### **Argentine Format:**

* **Prices:** Use period (.) for thousands and comma (,) for decimals  
  * Example: $1,250.50 or $150.00  
* **Automatic format:** As you type, the app formats the price  
* **Dates:** In Argentine Spanish with full local format

### **Local Storage:**

* **No internet required:** Works completely offline  
* **Without registration:** You do not need to create an account or provide personal information.  
* **Total privacy:** Your data is only on your device  
* **Persistence:** The information is maintained even if you close the browser

### **Validations and Security:**

* Validates that the prices are valid numbers  
* Check that the amounts are positive  
* Confirm destructive actions (delete data, cancel purchase)  
* Handling errors with clear messages

### **User Experience:**

* **Tabbed Browsing:** Smooth switching between sections  
* **Clear states:** You always know what step you are on  
* **Success messages:** Confirmations when you save data  
* **Autocomplete:** Save time by finding existing products  
* **Flexible Edition:** You can change any data before saving.

---

## **🎓 Real Use Cases**

### **For Families:**

* Controlling monthly supermarket spending  
* Compare prices between different chains  
* Planning the family budget  
* Avoid overbuying by remembering what you bought last week

### **For Students:**

* Keep strict control of the limited budget  
* Find the best prices at different neighborhood supermarkets  
* Record expenses for personal accounting

### **For Savers:**

* Detect when prices of specific products increase  
* Compare historically whether a price is expensive or cheap  
* Optimize your shopping by choosing the most economical supermarket  
* Track savings goals

### **For Analytics:**

* Generate personal consumption statistics  
* Analyze price trends over time  
* Identify spending patterns  
* Make decisions based on real data

---

## **🚀 Complete Usage Flow**

1. **First time:**  
   * You open the app  
   * You go to "New Purchase"  
   * You enter the name of the supermarket  
   * You add products one by one with their details  
   * You complete the purchase  
   * Your first registration is saved\!  
2. **Following purchases:**  
   * You enter the supermarket  
   * When adding a product, you enter its barcode.  
   * The app tells you if you've already bought it before.  
   * If found: autocomplete name, price and photo  
   * You only edit the price if it has changed.  
   * You add quantity  
   * You repeat with all the products  
   * You finish and save  
3. **Periodic analysis:**  
   * Go to "History" to see your past expenses.  
   * Go to "Prices" to analyze variations  
   * You identify trends and make decisions  
   * Optimize your next purchases

---

## **✨ Unique Advantages**

✅ **100% Free:** No costs, no ads, no subscriptions 

✅**Without registration:** You don't need email or personal information 

✅**Offline:** Works without internet 

✅**Privacy:** Your data never leaves your device 

✅**Local format:** Designed specifically for Argentina 

✅**Easy to use:** Intuitive and modern interface 

✅**Complete:** Logging, history, and analytics all in one 

✅**Intelligent:** Automatic search and autocomplete 

✅**Visual:** Charts and colors for quick analysis 

✅**Flexible:** You can use only the functions you need

---

## **🎯 In Summary**

**SuperTrack Market**are you**smart shopping companion**that allows you to:

* ✅ **Registrar** each purchase with all the details  
* ✅ **Remember** what you bought, where and when  
* ✅ **Compare** prices between supermarkets and dates  
* ✅ **Analyze** price trends with charts  
* ✅ **Save** money buying where it is cheapest  
* ✅ **Check** your budget with real information  
* ✅ **Decide** informed based on your history

It is the ultimate **tool** for those who want to have **control total** about your grocery spending and take **smart decisions** Based on real data, not memory or estimates. All this with a beautiful, modern, and easy-to-use interface, designed specifically for the Argentine market.

## **Images from the application:**

<img width="558" height="543" alt="Screenshot_1" src="https://github.com/user-attachments/assets/b7212c05-b7c0-4a0f-877f-1c1870259c15" /><br>


<img width="576" height="547" alt="Screenshot_2" src="https://github.com/user-attachments/assets/3819fba7-0dbd-4e4c-bb3f-2f8c40090072" /><br>


<img width="569" height="543" alt="Screenshot_3" src="https://github.com/user-attachments/assets/3f69b431-c799-4889-887a-f43469ffbb9e" /><br>

---

