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

✅ **100% Gratis:** Sin costos, sin publicidad, sin suscripciones ✅ **Sin registro:** No necesitas email ni datos personales ✅ **Offline:** Funciona sin internet ✅ **Privacidad:** Tus datos nunca salen de tu dispositivo ✅ **Formato local:** Diseñado específicamente para Argentina ✅ **Fácil de usar:** Interfaz intuitiva y moderna ✅ **Completa:** Registro, historial y análisis todo en uno ✅ **Inteligente:** Búsqueda y autocompletado automático ✅ **Visual:** Gráficos y colores para análisis rápido ✅ **Flexible:** Puedes usar solo las funciones que necesites

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

