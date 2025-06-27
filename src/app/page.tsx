
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transforma tu negocio con nuestra web rápida y soporte 24/7, ideal para dueños ocupados que quieren digitalizar sus ventas." cta1="Empieza Ahora" />
<How step1Title="Contáctanos" step1Desc="Comienza a digitalizar tu negocio ahora mismo." step2Title="Web en 24h" step2Desc="Recibe tu portal de ventas rápidamente." step3Title="Soporte 24/7" step3Desc="Siempre disponibles para ayudarte." />
<Aboutus headline="WebGo: Crece Digitalmente Ya" subheadline="Transformamos negocios físicos en digitales sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Ventas Aseguradas" beneficio1="Genera ventas online fácilmente." beneficiotitulo2="Gestión Simplificada" beneficio2="Nosotros manejamos tu presencia digital." />
<Services heading="Transforma Tu Negocio en 24 Horas" description="asda - asdad crea tu web de ventas sin esfuerzo." services={[{"name":"Diseño Express","icon":"rocket","description":"Web lista en menos de un día."},{"name":"Soporte 24/7","icon":"headset","description":"Siempre disponibles para ayudarte."},{"name":"Optimización SEO","icon":"chart-line","description":"Aparece primero en búsquedas."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita transacciones rápidas y seguras."},{"name":"Gestión de Contenido","icon":"edit","description":"Actualiza tu web sin complicaciones."},{"name":"Análisis Web","icon":"analytics","description":"Conoce el rendimiento de tu sitio."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas digitales en realidades impresionantes y efectivas." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio?","respuesta":"WebGo te ayuda a crear un sitio web eficaz para aumentar tus ventas en línea, incluso si solo vendes por recomendación. Nos encargamos de todo para que no tengas que preocuparte por la gestión técnica."},{"pregunta":"¿Qué beneficios obtendré al usar los servicios de WebGo?","respuesta":"Con WebGo, tendrás un sitio web optimizado y fácil de usar que atrae a más clientes y mejora tus ventas. Además, te ofrecemos soporte continuo para que no pierdas tiempo en la gestión del sitio."},{"pregunta":"¿Cómo puedo empezar a vender en línea si nunca lo he hecho antes?","respuesta":"No te preocupes, en WebGo tenemos experiencia ayudando a dueños de negocios a dar sus primeros pasos en el mundo digital. Te guiamos en cada etapa para que puedas empezar a vender en línea rápidamente."},{"pregunta":"¿Por qué debería elegir WebGo en lugar de gestionar mi sitio web por mi cuenta?","respuesta":"Elegir WebGo significa ahorrar tiempo y esfuerzo. Nos encargamos de la creación y mantenimiento de tu sitio web, permitiéndote centrarte en lo que mejor haces: gestionar tu negocio."},{"pregunta":"¿Cuánto cuesta el servicio de creación de sitios web con WebGo?","respuesta":"El servicio de creación de sitios web con WebGo tiene un precio de 123. Este costo incluye el diseño, desarrollo y soporte continuo para asegurar que tu sitio web siempre esté optimizado y funcionando de manera efectiva."}]} />
<BookAppointment 
                      heading="¡Transforma tus Recomendaciones en Ventas Online!" 
                      description="Con WebGo, digitaliza tu negocio y deja que nosotros gestionemos tu sitio web. Aprovecha esta oportunidad de asda (Precio: 123) - asdad para llevar tus ventas al siguiente nivel."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
