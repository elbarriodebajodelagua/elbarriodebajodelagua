const API_KEY = "e395871e1f7e47bd2bdd5c0f60a3db43";

const noticiasData = [
    { id: 1, t: "La Fractura Histórica del Canal de la Compañía (2010)", img: "https://i.postimg.cc/br9ZpcLM/canal-de-La-Compania-1200x675-1.jpg" },
    { id: 2, t: "El Fallo del Túnel Profundo y la Recurrencia de 2011", img: "https://i.postimg.cc/8CvPTgzh/2RSZZST4ZBEGXH4IN6BMNRZ43A.jpg" },
    { id: 3, t: "La Emergencia Sanitaria en Chalco (Agosto 2024)", img: "https://i.postimg.cc/4x7X1RVf/QEGUSXSTYFCGFIMHD5SZWUKQIY.jpg" },
    { id: 4, t: "El Misterio del 'Agua Rosa' en Nezahualcóyotl (2024)", img: "https://i.postimg.cc/26wY5kRg/neza-agua-rosa-111539.jpg" },
    { id: 5, t: "Fractura en el Dren Chimalhuacán II (Julio 2024)", img: "https://i.postimg.cc/x1zSzyVv/image-(10).png" },
    { id: 6, t: "Caos Vial y Rescate en Los Reyes La Paz (Junio 2025)", img: "https://i.postimg.cc/X7tR4GB0/QGH5SNXPDNEL5LPEGRB7DYAC7E.jpg" },
    { id: 7, t: "Avalancha de Lodo y Basura en San Sebastián (2025)", img: "https://i.postimg.cc/VvpVfp6p/N3MWYJIT3ZCZTCKV75GK6XUY4M.jpg" },
    { id: 8, t: "Taponamiento Crítico en el Colector Ecatepec (2026)", img: "https://i.postimg.cc/mrB6gQbn/image-(1)-(1).png" },
    { id: 9, t: "Anegamientos Obras Trolebús Chalco (2025)", img: "https://i.postimg.cc/tJZBMk5h/3OGL76YTYNBY3CLGWSCFVVD2BY.jpg" },
    { id: 10, t: "Atlas: Chalco como Foco Rojo Crítico", img: "https://i.postimg.cc/LsyKdyzW/Chalco-Inundaciones-Aguas-Negras-1Cuartoscuro.jpg" }
];

const escenasARData = [
    { id: 1, nombre: "Escenario 1: Inundación Zaragosa", info: "Simulación de encharcamiento nivel banqueta en zona habitacional de Chimalhuacán.", img: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=400" },
    { id: 2, nombre: "Escenario 2: Agua Rosa en Nezahualcóyotl", info: "Modelado preventivo del Canal de la Compañía a máxima capacidad de carga.", img: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=400" },
    { id: 3, nombre: "Escenario 3: Inundación Pantitlán", info: "Visualización de flujo de agua en sistema de bombeo de la zona oriente.", img: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?w=400" },
    { id: 4, nombre: "Escenario 4: Inundación Chimalhuacán", info: "Identificación de postes y transformadores peligrosos durante inundación.", img: "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?w=400" },
    { id: 5, nombre: "Escenario 5: Inundación Ecatepec", info: "Guía visual 3D sobre el terreno para salir hacia la zona alta del cerro.", img: "https://images.unsplash.com/photo-1510511459019-5dee997dd1db?w=400" }
];

const guiaData = {
    antes: [
        { i: "🎒", t: "Mochila de Emergencia", d: "Prepara radio de pilas, linterna, víveres para 3 días, botiquín y agua embotellada." },
        { i: "📂", t: "Documentos Seguros", d: "Escanea escrituras y actas; súbelas a la nube o guárdalas en bolsas herméticas selladas." },
        { i: "🧹", t: "Limpieza de Drenaje", d: "Elimina basura de coladeras de tu patio y calle para permitir el libre flujo del agua." },
        { i: "🏗️", t: "Barreras Físicas", d: "Ten costales de arena listos para las entradas si tu zona tiene historial de inundación." },
        { i: "🔌", t: "Sistemas Eléctricos", d: "Eleva contactos y el interruptor principal si vives en planta baja o zona de alto riesgo." },
        { i: "🗺️", t: "Ruta de Escape", d: "Identifica con tu familia el punto más alto del barrio y pacta un lugar de reunión." },
        { i: "🚗", t: "Resguardo Vehicular", d: "Si tienes auto, muévelo preventivamente a una calle elevada antes de que inicie la lluvia." },
        { i: "🧴", t: "Químicos Peligrosos", d: "Sube pesticidas, cloro y solventes a repisas altas para evitar que contaminen el agua." },
        { i: "🩹", t: "Seguro de Daños", d: "Verifica si tu póliza de casa cubre desastres hidrometeorológicos y toma fotos de tu hogar." },
        { i: "📻", t: "Monitoreo Oficial", d: "Sintoniza estaciones de radio locales para avisos de Protección Civil de Chimalhuacán." }
    ],
    durante: [
        { i: "⚡", t: "Corte de Energía", d: "Baja el interruptor general y cierra la llave de paso de gas inmediatamente al entrar agua." },
        { i: "🔝", t: "Zonas Altas", d: "Sube al segundo piso o azotea si el nivel del agua sube rápido. No esperes al último minuto." },
        { i: "🚱", t: "Agua Contaminada", d: "Evita beber agua del grifo; usa solo tus reservas embotelladas para beber o cocinar." },
        { i: "🚫", t: "No Cruces Corrientes", d: "Nunca intentes caminar o conducir en calles inundadas; 15cm de corriente derriban a un adulto." },
        { i: "📵", t: "Uso del Móvil", d: "Usa el celular solo para reportar emergencias reales al 911 para ahorrar batería crítica." },
        { i: "👟", t: "Calzado Cerrado", d: "Usa de preferencia botas o zapatos cerrados; el agua oculta objetos punzantes y vidrios." },
        { i: "🛑", t: "Evita Puentes", d: "No te refugies bajo puentes o estructuras metálicas; el suelo debilitado puede ceder." },
        { i: "🕷️", t: "Cuidado Animal", d: "Vigila la presencia de arañas o alacranes que buscan zonas secas en muebles elevados." },
        { i: "📡", t: "Señales de Ayuda", d: "Si quedas atrapado, usa una linterna o tela blanca para hacer señales visuales a rescatistas." },
        { i: "🤝", t: "Ayuda Prioritaria", d: "Ayuda a niños, adultos mayores y personas con discapacidad a subir a zonas de resguardo." }
    ],
    despues: [
        { i: "🏢", t: "Revisión Estructural", d: "No entres a tu casa hasta que Protección Civil confirme que no hay riesgo de derrumbe." },
        { i: "🧼", t: "Higiene Total", d: "Lava paredes y pisos con agua clorada para eliminar bacterias fecales del drenaje." },
        { i: "🍔", t: "Desecha Alimentos", d: "Tira cualquier comida que haya tenido contacto con el agua de inundación o lodo." },
        { i: "🚿", t: "Salud Personal", d: "Báñate con jabón antibacterial tras limpiar lodo para evitar infecciones en la piel." },
        { i: "🦟", t: "Control de Vectores", d: "Elimina charcos estancados en llantas o botes para evitar criaderos de mosquitos (Dengue)." },
        { i: "🔌", t: "Secado Eléctrico", d: "No conectes nada hasta que un técnico certifique que la instalación interna está seca." },
        { i: "📸", t: "Registro de Daños", d: "Toma fotos de muebles y daños estructurales antes de limpiar para el reporte del seguro." },
        { i: "📉", t: "Gestión de Lodo", d: "Retira el lodo mientras está húmedo; al secarse se vuelve duro y tapa tuberías internas." },
        { i: "🌡️", t: "Vigilancia Médica", d: "Acude al médico si presentas fiebre, diarrea o heridas infectadas tras el desastre." },
        { i: "🏘️", t: "Unión Vecinal", d: "Organiza faenas de limpieza en tu calle para evitar que la basura acumulada tape futuros drenes." }
    ]
};

const quickTipsData = [
    "🧹 Limpia tu calle para evitar coladeras tapadas.", "🔌 Desconecta aparatos si el agua sube.", "🎒 Prepara tu mochila de emergencia hoy.",
    "🚗 No cruces corrientes de agua en auto.", "🧼 Lávate las manos tras tocar agua sucia.", "🏗️ Usa sacos de arena en las puertas.",
    "🐕 Lleva a tus mascotas a un lugar alto.", "🧴 Almacena agua potable en botes limpios.", "📻 Escucha solo reportes oficiales.",
    "🧱 Sube tus muebles de valor a un segundo piso.", "🚿 No te bañes durante tormentas eléctricas.", "📉 Corta el gas si la inundación es grave.",
    "👟 Usa calzado con suela antideslizante.", "🧤 Usa guantes de goma al limpiar lodo.", "🧪 No mezcles cloro con amoniaco.",
    "🦟 Elimina charcos para evitar mosquitos.", "⚡ Aléjate de cables eléctricos caídos.", "📱 Mantén tu celular cargado siempre.",
    "🚑 Localiza la clínica más cercana.", "🏚️ No entres a casas dañadas sin permiso.", "🌧️ Conduce despacio y con luces encendidas.",
    "🚫 Mantén a los niños lejos del agua acumulada.", "🥪 Ten comida enlatada que no necesite fuego.", "🌡️ Vigila signos de fiebre en tu familia.",
    "🛣️ Conoce rutas alternas hacia zonas altas.", "🏢 Identifica el refugio de tu municipio.", "🪟 Asegura tus ventanas ante vientos fuertes.",
    "🤝 Pacta un punto de reunión familiar.", "📄 Sube tus documentos a la nube.", "💧 No bebas agua de la red si sale turbia."
];

let newsSwiper, arSwiper;

function changeTab(tabId, element) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    element.classList.add('active');
    
    // GUARDAR PESTAÑA PARA PERSISTENCIA
    localStorage.setItem('activeTab', tabId);

    if(tabId === 'ar-section' && arSwiper) { arSwiper.update(); arSwiper.slideToLoop(0, 0); }
    if(tabId === 'inicio' && newsSwiper) newsSwiper.update();
}

function switchGuiaTab(etapa) {
    document.querySelectorAll('.guia-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.guia-container').forEach(c => c.classList.remove('active'));
    document.querySelector(`[onclick="switchGuiaTab('${etapa}')"]`).classList.add('active');
    document.getElementById(`guia-${etapa}`).classList.add('active');
}

// CORRECCIÓN GUÍA 10-10-10
function renderGuiaTips() {
    ['antes', 'durante', 'despues'].forEach(etapa => {
        const container = document.getElementById(`list-${etapa}`);
        if(container) {
            container.innerHTML = guiaData[etapa].map((tip, idx) => `
                <div class="tip-card-complex ${etapa}-border">
                    <div class="tip-icon-box">${tip.i}</div>
                    <div class="tip-text-content"><strong>${idx + 1}. ${tip.t}</strong><p>${tip.d}</p></div>
                </div>
            `).join('');
        }
    });
}

function updateGauge(id, value, max) {
    const gaugeElement = document.getElementById(id);
    if (gaugeElement) {
        const percentage = (value / max) * 126; 
        gaugeElement.style.strokeDasharray = `${percentage}, 126`;
    }
}

function openSemaforoInfo() {
    const body = document.getElementById('semaforo-modal-body');
    body.innerHTML = `
        <h3 style="margin-top:0; color: #F6FAFD;">Interpretación del Semáforo</h3>
        <p style="font-size:12px; color:#B3CFE5; margin-bottom:20px;">Deducimos tu riesgo mediante datos climáticos locales:</p>
        <div class="modal-inner-content">
            <div class="semaforo-card v-verde">
                <span>✅</span>
                <div><strong>RIESGO BAJO</strong><p>Cielos despejados o llovizna leve. Situación estable en el Barrio. Momento ideal para asegurar documentos.</p></div>
            </div>
            <div class="semaforo-card v-naranja">
                <span>⚠️</span>
                <div><strong>RIESGO MEDIO</strong><p>Lluvia constante o pronóstico de tormenta. Limpia tu basura, vigila coladeras y evita salir de casa si no es necesario.</p></div>
            </div>
            <div class="semaforo-card v-rojo">
                <span>🚨</span>
                <div><strong>RIESGO ALTO</strong><p>Tormentas torrenciales activas. Peligro de inundación inminente. Corta el gas, desconecta la luz y busca zonas altas.</p></div>
            </div>
        </div>
        <button class="action-btn" onclick="closeSemaforoInfo()" style="margin-top:25px; height:50px;">ENTENDIDO</button>
    `;
    document.getElementById('semaforo-modal').style.display = 'flex';
}
function closeSemaforoInfo() { document.getElementById('semaforo-modal').style.display = 'none'; }

function openAppHelp() {
    const body = document.getElementById('help-modal-body');
    body.innerHTML = `
        <h3 style="margin-top:0; color: #F6FAFD;">Manual de Uso</h3>
        <div class="modal-inner-content">
            <div class="help-item"><strong>🚦 Semáforo de Riesgo</strong><p>Indica la gravedad inmediata basada en datos meteorológicos locales y niveles de lluvia en tiempo real.</p></div>
            <div class="help-item"><strong>🗺️ Atlas de Proximidad</strong><p>Detecta automáticamente cuerpos de agua críticos (canales, drenes) en un radio de 2km de tu posición GPS actual.</p></div>
            <div class="help-item"><strong>🌡️ Monitoreo Climático</strong><p>Analiza la calidad del aire y la probabilidad real de lluvia con medidores dinámicos y detallados.</p></div>
            <div class="help-item"><strong>👁️ Escenas AR</strong><p>Gira el cubo 3D para explorar simulaciones de riesgo e inundación sobre tu terreno real.</p></div>
            <div class="help-item"><strong>💡 Tips de Seguridad</strong><p>Acciones concretas que rotan cada 10 segundos para protegerte antes, durante y después de una tormenta.</p></div>
        </div>
        <button class="action-btn" onclick="closeHelp()" style="margin-top:20px; height:50px;">ENTENDIDO</button>
    `;
    document.getElementById('help-modal').style.display = 'flex';
}
function closeHelp() { document.getElementById('help-modal').style.display = 'none'; }

function flipARCard(element) { element.querySelector('.ar-flip-inner').classList.toggle('is-flipped'); }

// CORRECCIÓN ICONOS CLIMA
function getWeatherEmoji(code, isDay) {
    if (code >= 200 && code < 300) return "⛈️"; 
    if (code >= 300 && code < 600) return "🌧️"; 
    if (code >= 600 && code < 700) return "❄️"; 
    if (code === 800) return isDay ? "☀️" : "🌙"; 
    if (code === 801 || code === 802) return isDay ? "⛅" : "☁️"; 
    if (code >= 803) return "☁️"; 
    return "🌡️";
}

async function loadWeather() {
    navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude: lat, longitude: lon } = pos.coords;
        try {
            const [resCurrent, resForecast, resAir] = await Promise.all([
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${API_KEY}`),
                fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${API_KEY}`),
                fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
            ]);
            const data = await resCurrent.json();
            const dataForecast = await resForecast.json();
            const dataAir = await resAir.json();
            
            const currentTime = Math.floor(Date.now() / 1000);
            const isDay = currentTime > data.sys.sunrise && currentTime < data.sys.sunset;

            document.getElementById('location-name').innerText = `📍 ${data.name}, MEX`;
            document.getElementById('temp').innerText = `${Math.round(data.main.temp)}°`;
            document.getElementById('weather-desc').innerText = data.weather[0].description.toUpperCase();
            
            // CORRECCIÓN: Actualizar el icono y quitar reloj
            document.getElementById('weather-icon-main').innerText = getWeatherEmoji(data.weather[0].id, isDay);

            document.getElementById('visibility').innerText = `${(data.visibility / 1000).toFixed(1)} km`;
            document.getElementById('pressure').innerText = `${data.main.pressure} hPa`;
            document.getElementById('feels-like').innerText = `${Math.round(data.main.feels_like)}°C`;
            document.getElementById('humidity').innerText = `${data.main.humidity}%`;
            document.getElementById('wind').innerText = `${data.wind.speed} km/h`;
            
            const aqiLevels = ["Cal. Aire: Bueno", "Cal. Aire: Aceptable", "Cal. Aire: Moderado", "Cal. Aire: Mal Aire", "Cal. Aire: Muy Mala"];
            document.getElementById('air-quality').innerText = aqiLevels[dataAir.list[0].main.aqi - 1];
            updateGauge('gauge-air', dataAir.list[0].main.aqi, 5);
            
            const probRain = Math.round(dataForecast.list[1].pop * 100);
            const rainVol = (dataForecast.list[1].rain && dataForecast.list[1].rain['3h']) ? dataForecast.list[1].rain['3h'] : 0;
            const forecastEmoji = getWeatherEmoji(dataForecast.list[1].weather[0].id, isDay);
            
            updateGauge('gauge-rain', probRain, 100);
            document.getElementById('rain-chance').innerText = `${probRain}%`;
            document.getElementById('next-3h-text').innerHTML = `${forecastEmoji} <strong>${dataForecast.list[1].weather[0].description.toUpperCase()}</strong><br><small>Probabilidad de lluvia: ${probRain}% | Volumen de gotas: ${rainVol}mm</small>`;
            
            const banner = document.getElementById('semaforo-banner');
            if (data.weather[0].id < 600 && data.weather[0].id >= 200) { banner.style.backgroundColor = '#C0392B'; document.getElementById('semaforo-text').innerText = "SEMÁFORO: RIESGO ALTO"; }
            else { banner.style.backgroundColor = '#419D78'; document.getElementById('semaforo-text').innerText = "SEMÁFORO: RIESGO BAJO"; }
        } catch(e) { console.error(e); }
    });
}

window.onload = () => {
    // NOTICIAS
    const newsWrapper = document.getElementById('news-wrapper');
    noticiasData.forEach(n => {
        newsWrapper.innerHTML += `<div class="swiper-slide" onclick="location.href='noticia.html?id=${n.id}'"><div class="news-img-card" style="background-image:url('${n.img}')"></div><p style="padding:10px 0; font-weight:bold; color:#B3CFE5;">${n.t}</p></div>`;
    });
    newsSwiper = new Swiper(".newsSwiper", { slidesPerView: 1.2, spaceBetween: 15, loop: true, autoplay: { delay: 10000 } });

    // CUBO AR CORREGIDO (IMAGEN MÁS GRANDE + OVERLAY)
    const arWrapper = document.getElementById('ar-cards-wrapper');
    escenasARData.forEach(esc => {
        arWrapper.innerHTML += `
            <div class="swiper-slide">
                <div class="ar-flip-card" onclick="flipARCard(this)">
                    <div class="ar-flip-inner">
                        <div class="ar-card-front">
                            <img src="${esc.img}" alt="${esc.nombre}" style="width:100%; height:85%; object-fit:cover; border-radius:25px 25px 0 0;">
                            <div style="position:absolute; bottom:0; width:100%; height:15%; background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; border-radius:0 0 25px 25px;">
                                <h3 style="margin:0; font-size:14px;">${esc.nombre}</h3>
                            </div>
                        </div>
                        <div class="ar-card-back">
                            <h3 style="margin-top:0; color:#0A1931;">Detalles Técnicos</h3>
                            <p style="font-size:12px; color:#1A3D63;">${esc.info}</p>
                            <button class="action-btn" onclick="event.stopPropagation(); window.location.href='ar_view.html?id=${esc.id}'" style="height:45px; font-size:11px;">
                                VER ESCENA AR
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
    });

    arSwiper = new Swiper(".tinderSwiper", {
        effect: "cube", grabCursor: true, loop: true,
        cubeEffect: { shadow: false, slideShadows: false, shadowOffset: 20, shadowScale: 0.94 },
        on: { slideChange: function () { const counter = document.getElementById('ar-counter'); if(counter) counter.innerText = `Escena ${this.realIndex + 1} de 5`; } }
    });

    // RECUPERAR PESTAÑA AL VOLVER
    const savedTab = localStorage.getItem('activeTab') || 'inicio';
    const activeNavItem = Array.from(document.querySelectorAll('.nav-item')).find(item => item.getAttribute('onclick').includes(savedTab));
    changeTab(savedTab, activeNavItem);

    renderGuiaTips();
    loadWeather();

    // TIPS
    const tipTextEl = document.getElementById('current-quick-tip');
    const tipIconEl = document.getElementById('tip-icon');
    const tipBarEl = document.querySelector('.tip-progress-bar');
    let tipIdx = 0;
    function updateTip() {
        if(!tipTextEl) return;
        const fullTip = quickTipsData[tipIdx];
        const emoji = fullTip.split(' ')[0];
        const text = fullTip.replace(emoji, '').trim();
        tipTextEl.style.opacity = '0';
        setTimeout(() => {
            tipIconEl.innerText = emoji; tipTextEl.innerText = text; tipTextEl.style.opacity = '1';
            tipBarEl.style.transition = 'none'; tipBarEl.style.width = '0%';
            setTimeout(() => { tipBarEl.style.transition = 'width 10s linear'; tipBarEl.style.width = '100%'; }, 50);
            tipIdx = (tipIdx + 1) % quickTipsData.length;
        }, 500);
    }
    updateTip(); setInterval(updateTip, 10000);
};