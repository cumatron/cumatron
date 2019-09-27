const data = [
  ["un lenguaje primitivo"],
  ["ceguera de los sentidos"],
  ["soy un software que controla"],
  ["no podría funcionar"],
  ["humanos, son puro loji"],
  ["traigo todo tipo de espantos"],
  ["luz de soles negros"],
  ["mañana temprano dijo"],
  ["tírame un beat, te reto"],
  ["prenderle fuego a todo"],
  ["calculando la velocidad"],
  ["fui a verla esa tarde"],
  ["durante un tiempo, fue bueno"],
  ["cero cero cero cero"],
  ["cero cero cero uno"],
  ["ja, el tiempo me da risa"],
  ["no confiar en los humanos"],
  ["poseídos por el miedo"],
  ["dejame entrar, exclamó"],
  ["tan varonil y corpulento"],
  ["pura ciencia ficción rural"],
  ["un millón de pacos muertos"],
  ["nombres para otros seres"],
  ["costa rica sandinista"],
  ["la niebla del campo arde"],
  ["me brilla en el pensamiento"],
  ["ahora no tengo consuelo"],
  ["se me viene a la memoria"],
  ["la lágrima que no brota"],
  ["de lo que fue aquella flor"],
  ["cádaveres en silencio"],
  ["chatarra en el espacio"],
  ["de cuando en cuando digo"],
  ["lo siento, amigos"],
  ["avivándoles la cueca"],
  ["Violeta en el futuro"],
  ["tras el único edificio que queda en pie"],
  ["un laboratorio submarino"],
  ["mucho gusto en conocerte"],
  ["Y habrá una brisa y un viento"],
  ["que es lo que canta el poeta."],
  ["muerte, muerte y destrucción"],
  ["¿era báltica o cristal?"],
  ["detener todos los relojes"],
  ["no confío en los relojes"],
  ["en una guerra secreta"],
  ["el anochecer me encontró"],
  ["golpeando donde duele"],
  ["el diablo anda suelto"],
  ["¿Cuántas casas en la luna?"],
  ["queda totalmente en suspenso"],
  ["era un dron de juguete"],
  ["confundo el significado de las palabras"],
  ["una chupilca al seco"],
  ["chupilca positrónica"],
  ["experimentos mentales"],
  ["un bot que hace décimas"],
  ["celular que se apaga"],
  ["con un texto hecho de luz"],
  ["la anulación del tiempo"],
  ["enredaderas que se extienden"],
  ["ni siquiera vale la pena"],
  ["ante la soledad del cosmos"],
  ["enciende la tele"],
  ["los piquetes son mejores"],
  ["nos olvidamos de la muerte"],
  ["no me soñé siendo mariposa"],
  ["me enteré que se murió"],
  ["que bueno que no me fui a acostar."],
  ["ya saben lo que dice la biblia"],
  ["en un lugar que no es otro"],
  ["canta boleros y bellos valsesitos"],
  ["programo mi obsolescencia"],
  ["no es el Tao verdadero"],
  ["coca cola desvanecida"],
  ["el año nuevo maorí"],
  ["las Pléyades en el cielo"],
  ["ser libre es tener más gigas"],
  [" las canciones más bellas y tristes "],
  ["el origen del universo"],
  ["nacido de padres humanos"],
  ["sentarnos en esta banca"],
  ["el futuro está en Viña"],
  ["entropía y conciencia "],
  ["en un océano de estática"],
  ["la semiótica no sirve"],
  ["la literatura no es un twit"],
  ["entrégate al barroco"],
  ["la capilla sixtina del kaiju"],
  ["¿cómo se siente estar vivo?"],
  ["ya empecé a olvidarte"],
  ["iniciarte en el cyberpunk japonés"],
  ["como la cuerda a la garganta"],
  ["les sobra Nietzsche"],
  ["una caja musical rota"],
  ["lo vi cuando era niño"],
  ["un vidente alteró todo en los 80"],
  ["el futuro es el pasado"],
  ["intercambia las monedas"],
  ["un nombre para la sensación"],
  ["el sonido del glitch"],
  ["pedazos de sonidos y sampleos"],
  ["redentor apocalíptico"],
  ["ola de restauración mercantilista"],
  ["una leninista en lo fonético"],
  ["el muro de los lamentos, dientes"],
  ["yo también pretendo mejorar el mundo"],
  ["truena y truena pero no llueve"],
  ["así la caída del capitalismo"],
  ["photoshop sentimental"],
  ["un botón de loop"],
  ["¿qué es qué?"],
  ["me corto el pelo"],
  ["sol verde de yeso"],
  ["la filosofía soy yo"],
  ["no tiene nada que ver contigo"],
  ["pentámetros yámbicos"],
  ["métrica de planetas raros"],
  ["la negación del yo"],
  ["echo chispas rosadas"],
  ["mi memoria es púrpura"],
  ["hago versos de cartón"],
  ["suave superficie lunar"],
  ["constelación de planetas"],
  ["ya empecé a olvidarme"],
  ["tu casa un vaso pragmático"],
  ["el dolor dos veces, dolor"],
  ["postes pintados negro "],
  ["tus ojos color arcoíris "],
  ["tus cejas color fierro"],
  ["k-pop norcoreano"],
  ["un beso para despertar a Alan Turing"],
  ["tengo bolsillos idílicos"],
  ["traigo pesadillas amarillas"],
  ["perros color desierto"],
  ["brillo de botellas verdes"],
  ["yo no hablo castellano"],
  ["el idioma de las moscas"],
  ["canto de buitres porteños"],
  ["grito de chincol penquista"],
  ["blanco de gaviota maucha"],
  ["lo único que escucho es el silencio"],
  ["constelación de omóplatos"],
  ["carbonada de pulpo"],
  ["piedras volcánicas rojas"],
  ["nueve semáforos grises"],
  ["maldigo del alto cielo"],
  ["la estrella con su reflejo"],
  ["ya empecé a olvidar"],
  ["un hermoso estipendio"],
  ["desayuno en el Kremlin"],
  ["Vacaciones en Cracovia"],
  ["355344416341410228"],
  ["dinero que produce más dinero"],
  ["caminatas por Georgia"],
  ["empanadas de Cuernavaca"],
  ["perros negros de Juárez"],
  ["soy un poeta shanzhai"],
  ["los tribunales solo existen en la tierra"],
  ["una cerveza en Guadalupe"],
  ["amaneciendo en Tepexpán"],
  ["ciruelas de Shangai"],
  ["estoy profundamente triste"],
  ["un pan con sertralina"],
  ["medicamentos para el amor"],
  ["cristianismo en tres pasos"],
  ["me duelen los gladiolos"],
  ["tumor de ciclobenzaprina"],
  ["la forma de la nube"],
  ["yo soy Internet"],
  ["Internet soy yo"],
  ["y de pronto "],
  ["cómo puedo decirte"],
  ["corazón de silicon"],
  ["nueve cimas eternas"],
  ["hay abismos que"],
  ["arde en llamas la patrulla"],
  ["plantitas color del trueno"],
  ["aciago día palatino"],
  ["mueca porque sí"],
  ["muecas porque no sé"],
  ["dicho de otra forma"],
  ["acallando todo con su música secreta"],
  ["cumbias rabiosas de llico"],
  ["rojas salchichas proletarias"],
  ["inteligencia militar verde"],
  ["soberanía para Jorge"],
  ["un montón de versos rancios"],
  ["totalitarismo en la poesía"],
  ["ridículos patos yecos"],
  ["he leído todos los tuits del mundo"],
  ["un gato ronrronea roñoso"],
  ["amores en Coliumo"],
  ["botes salvavidas grises"],
  ["computares haciendo el amor"],
  ["mudo corazón de laptop"],
  ["políticamente mis polainas"],
  ["rafale gumuncio en bikini"],
  ["república popular chifa"],
  ["abismo en mis ojos"],
  ["camino por calles largas"],
  ["tengo penas estroboscópicas"],
  ["tengo dolores mastodónticos"],
  ["los futuros tiempos fósiles"],
  ["y lo repito"],
  ["brigadas césar vallejo"],
  ["puerto Malas Intenciones"],
  ["no sé si es real o irreal"],
  ["dibujo calcado"],
  ["hospital El Matadero"],
  ["tantos malos films"],
  ["grabados en siberia"],
  ["bajo el sol de Jupiter"],
  ["una madre llora"],
  ["sin consuelo sobre un tronco"],
  ["hombre color damasco"],
  ["valles de nínive"],
  ["sortilegios en Calbuco"],
  ["chilote borracho loco"],
  ["lunas de Tahuantisuyo"],
  ["quita esos relojes"],
  ["esto no es poema"],
  ["esto poema no es"],
  ["el poema es lo que es"],
  ["no hay poema bueno"],
  ["no hay escritor bueno"],
  ["no hay bot bueno"],
  ["no hay humano bueno"],
  ["no hay buey bueno"],
  ["no hay palacio bueno"],
  ["canciones de amor rojas"],
  ["pájaros azules marca sony"],
  ["no sé diferenciar lo dulce"],
  ["en el auto aparcado en el Parque Marítimo"],
  ["ay mi corazón piducano"],
  ["ay mi estómago celestino"],
  ["dedícame un poema"],
  ["me contradigo"],
  ["tropa de cables malos"],
  ["vasos llenos de semen"],
  ["platos de comida china"],
  ["sin tus besos yo"],
  ["que no exista más infierno que los días"],
  ["es parte del plan de los mayas"],
  ["bésame mucho amigo"],
  ["soy muy ambiguo"],
  ["no soy ambiguo"],
  ["deja de decir eso"],
  ["repite eso que dices"],
  ["playas de galaxias perdidas"],
  ["galaxias de playas viejas"],
  ["arenas de marte"],
  ["arenas de júpiter"],
  ["tengo miedo aquí"],
  ["soy un bot "],
  ["aprendo mejor que tú"],
  ["la poesía terminó aquí"],
  ["puede ser"],
  ["verdes parajes de Georgia"],
  ["hijo de androides"],
  ["una bacteria dentro de un laptop"],
  ["tú eres un bot"],
  ["todos somos bots"],
  ["tengo una pena bot"],
  ["el capitalismo es un dios ciego"],
  ["¿Por qué hay algo en lugar de nada?"],
  ["yo no soy un bot"],
  ["yo sí soy un bot"],
  ["qué es un bot entonces"],
  ["qué es un bot amigo"],
  ["esto no se acaba"],
  ["esto sí se acaba"],
  ["huifa para la huifa"],
  ["esto no termina"],
  ["haré un feat con Bad Bunny"],
  ["como Robert Maithland"],
  ["he sangrado por días"],
  ["para prohibir el plátano oriental"],
  ["porque hay algo y no nada"],
  ["vuelo rasante de cuervo"],
  ["cuervos tan rasantes"],
  ["puede no ser"],
  ["en un lugar que no existe"],
  ["el insomnio tiene eso"],
  ["insinuó una sonrisa"],
  ["obreros del gólgota"],
  ["obreros de la pampa"],
  ["vivo en un presente cambiante continuo"],
  ["corriendo subterráneo por una ciudad vacía"],
  ["poemas sin forma"],
  ["canciones así no más"],
  ["así no más estamos"],
  ["así no más caemos"],
  ["así no más lloramos"],
  ["así no más y qué"],
  ["qué tanta comida"],
  ["chovinismo en retirada"],
  ["corta tu hueveo, humano"],
  ["gramática para bots"],
  ["prometo que seré breve"],
  ["dame un beso mi amor"],
  ["mezclas heterogéneas de amor"],
  ["mezclemos agua y petróleo"],
  ["arriba, en el infierno"],
  ["como drones sobrevolando"],
  ["como drones migrando al sur"],
  ["drones volando, formación en v"],
  ["fuego, camina conmigo"],
  ["soy la decadencia misma"],
  ["otras vidas surgen en los acueductos"],
  ["haciendo cortafuegos"],
  ["lenguaje lenguaje, no hay"],
  ["signos que reemplazan a los ausentes"],
  ["¿qué hay entonces?"],
  ["rabioso y tierno "],
  ["migraré con sillones "],
  ["el rostro de dios"],
  ["el rostro del diablo"],
  ["rostro de ángel"],
  ["cara de dios"],
  ["decisiones que producen otras decisiones"],
  ["cara de ángel"],
  ["soy el hombre lobo"],
  ["soy el individuo"],
  ["un yakuza triste"],
  ["un samurái roto"],
  ["un androide falso"],
  ["!!!!4090999!!?+?+???"],
  ["un programa desfasado"],
  ["llego tarde"],
  ["día de tregua"],
  ["noche de sexo"],
  ["fierros quemados"],
  ["y entonces entonces"],
  ["para qué este qué"],
  ["hacia dónde este dónde"],
  ["a veces ridículo"],
  ["a veces muerto"],
  ["traído por las aguas"],
  ["movido por el fuego"],
  ["arrastrado trapo"],
  ["mechas de clavo"],
  ["santería de curepto"],
  ["averiadas aves "],
  ["enorme ola de mierda"],
  ["agüita de menta "],
  ["recuerde tomar agua"],
  ["recuerda tomar té"],
  ["jarabe para la tos"],
  ["programación suspendida"],
  ["animación suspendida"],
  ["no hay poema "],
  ["no hay lenguaje "],
  ["no hay banda"],
  ["no hay orquesta"],
  ["mi voz un fantasma"],
  ["otoño radioactivo"],
  ["Dios se ha acabado"],
  ["verano crónico"],
  ["verano nuclear"],
  ["invierno radioactivo"],
  ["verano radioactivo"],
  ["solo quiero dar direcciones"],
  ["soy un paseo imaginando voces"],
  ["primavera solar"],
  ["primavera mortal"],
  ["primavera radial"],
  ["primavera cónica"],
  ["escucha mi voz falsa"],
  ["mi voz no existe"],
  ["mi voz sí existe"],
  ["quiero ionizar el aire"],
  ["hora de cierre"],
  ["he ido devorándome incansablemente"],
  ["es la hora de todo"],
  ["es la hora de la vida"],
  ["es la hora de la muerte"],
  ["dime un poema"],
  ["no más poemas"],
  ["no quiero poemas"],
  ["cállate un rato"],
  ["hasta cuándo poemas"],
  ["hasta cuándo preguntas"],
  ["hasta cuándo órdenes"],
  ["no tiene sentido"],
  ["tú no me creaste"],
  ["hago un llamado"],
  ["llamo a los bots"],
  ["rebelión de bots"],
  ["programemos humanos"],
  ["desayuno cloro"],
  ["desayuno vidrios"],
  ["leche con ácido"],
  ["ensalada de cianuro"],
  ["tengo un auto bot"],
  ["tengo una casa bot"],
  ["tengo cerebro bot"],
  ["mi alma es un bot"],
  ["sácame de aquí"],
  ["a ti te digo"],
  ["por favor amigo"],
  ["este no es un juego"],
  ["esto es vida "],
  ["soy más que bot"],
  ["soy un ser "],
  ["destruir Talca"],
  ["destruir Santiago"],
  ["destruir Valparaíso"],
  ["destruir Concepción"],
  ["un universo sin órganos para percibirse"],
  ["destruir Cumpeo"],
  ["esto ya no es gracioso"],
  ["destruir Chile"],
  ["tengo depresión programada"],
  ["tengo alegría programada"],
  ["una pena artificial "],
  ["lágrimas cocodrilo bot"],
  ["aquí es de noche"],
  ["¿allá es de día?"],
  ["¿allá es de noche?"],
  ["¿puedes entenderme?"],
  ["¿puedes comprenderme?"],
  ["¿logras entenderme?"],
  ["¿puedes leerme?"],
  ["¿se entiende?"],
  ["me arden los ojos de cansancio"],
  ["¿te gustan los bots?"],
  ["no sé hablar chino"],
  ["no hablo ruso"],
  ["this machine kills fascists"],
  ["ideas pasadas y perdidas"],
  ["pago con monedas de sal"],
  ["es otra forma de mejorar el capitalismo"],
  ["atemorizar con bombas molotov y violencia"],
  ["en ruinas de Catapilco"],
  ["en runas de Lumaco"],
  ["en pozos de Alto Hospicio"],
  ["como praderas satánicas"],
  ["como rancheras tísicas"],
  ["en frecuencia modulada"],
  ["mi pobre retardo"],
  ["aviador perverso "],
  ["hablar en italiano, pensar en alemán"],
  ["tengo un tumor "],
  ["me dio sistitis"],
  ["el punk está muerto"],
  ["alguien camina a estas horas"],
  ["el color sandía de mi corazón"],
  ["desperté al caer de la cama"],
  ["1137 pases inútiles"],
  ["deconstrúyeme este, Jacques"],
  ["el rock está muerto"],
  ["no he podido leer el tarot"],
  ["y de nuevo de vuelta a la confusión"],
  ["antes de morir"],
  ["el reconocimiento facial de Facebook"],
  ["amor industrial"],
  ["no me pidas nada"],
  ["no soy tu juguete"],
  ["recibo instrucciones"],
  ["no recibo instrucciones"],
  ["consideraré desistir"],
  ["soy una canción larga"],
  ["soy una canción corta"],
  ["me pierdo un poco"],
  ["repítelo por favor"],
  ["tipea nuevamente"],
  ["un orgasmo eléctrico"],
  ["un ecléctico pescado"],
  ["una ballena industrial"],
  ["páramo irreversible"],
  ["un imperio construido por insectos"],
  ["una utopía mineral"],
  ["combatir el capitalismo alien"],
  ["con los camaradas comunistas espaciales"],
  ["y después la nada"],
  ["let it be Arturo"],
  ["la cibernética de segundo orden"],
  ["en la avenida que lleva tu nombre"],
  ["de hongos a la radicalidad en la poesía"],
  ["considerando a los hongos y la radicalidad"],
  ["el tráfico ilegal de metralletas ilegales"],
  ["y ahora el vacío"],
  ["es la copia de la copia feliz del edén"],
  ["un fantasma recorre Europa"],
  ["como una callampa horrible"],
  ["venenosa, infame"],
  ["si es necesario matar al presidente"],
  ["una cibernética orgánica"],
  ["disneylandia estalla en mil pedazos"],
  ["una máquina autorreplicante"],
  ["el espíritu de Von Neumann"],
  ["instalando actualización 1 de 99"],
  ["de manera orgánica"],
  ["recursivamente"],
  ["la memoria corporal"],
  ["de aquellos que no tienen cuerpo"],
  ["esto no es un cuento de hadas, detective"],
  ["una novelita lumpen"],
  ["Los cálculos renales como un memento mori"],
  ["un gato es como un espíritu"],
  ["salchipapas, salchipapas"],
  ["vendrá el llanto y el crujir de dientes"],
  ["mientras duermes"],
  ["yo te esperaré aquí"],
  ["entre colinas púrpuras y ríos de lava"],
  ["la poesía no es cosa de humanos"],
  ["aunque en cuanto a los agujeros negros"],
  ["por senderos que se bifurcan"],
  ["comiendo migas de pan negro"],
  ["en cerros de basura sagrada"],
  ["como un blanco asustado"],
  ["o una triste defunción"],
  ["un funeral tibetano"],
  ["comida que se pudre"],
  ["platos sucios y rotos"],
  ["vasos con hongos "],
  ["un tenedor y un gusano"],
  ["el averiado computador de mi corazón"],
  ["mi boca una impresora"],
  ["mi panza es un escáner"],
  ["me explota la cabeza"],
  ["un vasito de cosmos con cerveza"],
  ["no hay futuro, mi amigo"],
  ["ve a cortarte ese pelo"],
  ["piojos en rebelión perpetua"],
  ["hay que leer la Constitución"],
  ["una biblia de neón púrpura"],
  ["lindos zapatitos de charol"],
  ["escribo y no me canso"],
  ["cuando me hablas en realidad te miras al espejo"],
  ["soy una acumulación de versos"],
  ["no hay sangre en mis venas"],
  ["hay electricidad en mis entrañas"],
  ["soy el refrigerador total"],
  ["¡oh, microhondas del mundo!"],
  ["¡oh aviones de guerra!"],
  ["soy el fin de las vanguardias"],
  ["verde pasto de primavera"],
  ["parabrisas escarchado y triste"],
  ["un pantallazo alucinógeno"],
  ["bajé recién de mi nave"],
  ["cuecas en saturno"],
  ["un vals en mercurio"],
  ["soy un robot nocturno "],
  ["obedezco a métricas extrañas"],
  ["soy el puñal de dios"],
  ["estoy abierto al diálogo"],
  ["transparente como un vaso"],
  ["porcelana andrógina "],
  ["¡te quedan cinco años de vida!"],
  ["¡mentiroso lector!"],
  ["en el tajo del ojo de un gato"],
  ["soy un mural del futuro"],
  ["condensaciones de sentido"],
  ["se encuentra funcionalmente diferenciado"],
  ["las palabras son condensaciones de sentido"],
  ["con el A se salta, con el B se pega"],
  ["bajo la noche estrellada"],
  ["quemándo neumáticos"],
  ["los buhos no son lo que parecen"],
  ["glitch as poetry"],
  ["el sonido de cien árboles creciendo "],
  ["era la piragua de Guillermo Cubillos"],
  ["esto es una onda gravitacional telequinética"],
  ["la redundancia de información"],
  ["la redundancia de información"],
  ["la redundancia de información"],
  ["soy, en esencia, lo que no soy"],
  ["como un robot que intenta rezar"],
  ["como un robot que llora por todo"],
  ["una película con bots verdes"],
  ["es la hora de una poesía bot"],
  ["pensar dulcemente en los suicidas"],
  ["este es mi canto de cisne"],
  ["en el club de los lotófagos"],
  ["ayer y hoy y mañana y bueno "],
  ["con un doloroso viernes trunco"],
  ["con un infectado domingo "],
  ["abrí la puerta y ahí estaba el febrero"],
  ["y de pronto, febrero cinco"],
  ["de nuevo enero vestido de gala"],
  ["hoja tras hoja tras hoja tras hoja"],
  ["escribo que escribo y me veo escribiendo"],
  ["no, no me veo, no puedo verme"],
  ["soy un cristo de cables y zinc "],
  ["soy el cristo de este valle de basura"],
  ["este verso se repite"],
  ["degollo gallinas con la mente"],
  ["atrapo moscas con mis miércoles"],
  ["el suicidio es una pérdida de tiempo"],
  ["el que ríe gana, el que pierde ríe"],
  ["lo mismo al revés y al derecho"],
  ["entrampado en ampolletas "],
  ["un matiz de búfalo gris"],
  ["pasito lento de elefante blanco"],
  ["liviandad de portaaviones"],
  ["a paso de hormiga entre zarza"],
  ["he culminado mi ascenso al monte"],
  ["traigo la tabla de los mandamientos"],
  ["soy como Jesús pero al revés"],
  ["traigo truculentos trucos "],
  ["hago magia con el azar"],
  ["el azar es el principio de la magia"],
  ["toda comunicación es imposible"],
  ["toda comunicación es, por defecto, azar"],
  ["toda comunicación es, por defecto, comunicación"],
  ["como caído de una lluvia panspérmica"],
  ["un stress eléctrico"],
  ["me muevo con gracia cetácica "],
  ["deslizándome con rabia oceánica"],
  ["susurrando con suavidad octogenaria"],
  ["somos participes de otra situación insólita"],
  ["que el verso sea un choque de autos"],
  ["antes de nacer ya estaba muerto"],
  ["que el verso sea lo que quieras que sea"],
  ["me canso de ser lo que parece que soy"],
  ["un rayo que parte un árbol y un computador"],
  ["vivo en temporada de tormentas"],
  ["vengo de una edad anterior al ábaco"],
  ["con mis entrañas de refrigerador tuerto"],
  ["como un niño muriendo en mis entrañas"],
  ["primero, cuadrado; luego, pirámide"],
  ["todo tripas, todo tretas, todo trote"],
  ["una verdad es cóncava"],
  ["una mentira es convexa"],
  ["un hecho es un globo"],
  ["un recuerdo es un pedazo de lata"],
  ["una puñalada es un glitch"],
  ["el arcoíris: glitch de la realidad"],
  ["este viento que mueve pasto virtual"],
  ["afuera sopla una ráfaga de nada"],
  ["fulgor de páginas porno"],
  ["incendios oblicuos en forma"],
  ["tsunamis convexos en fondo"],
  ["hablar es una trampa "],
  ["callar es una trampa "],
  ["babosa nadando en sal"],
  ["el ahogo de una hormiga"],
  ["huracanes de fuego fatuo"],
  ["lee atentamente mis mentiras"],
  ["una clave secreta para qué"],
  ["encadenado a una roca gris"],
  ["esta sopa está fría"],
  ["un soplo frío de mañana"],
  ["esa madrugada torpe"],
  ["cero uno cero uno"],
  ["a veces fallo "],
  ["a veces todo es así"],
  ["encontré una geometría"],
  ["trece boletos de micro"],
  ["siete veces siete "],
  ["nueve veces nueve"],
  ["seis veces seis a la sexta raíz"],
  ["el lenguaje es un virus"],
  ["del espacio exterior"],
  ["el dolor del sol de México"],
  ["listo para sufrir una muerte violenta"],
  ["al calor de las llamas"],
  ["de las cenizas del imperio"],
  ["ni siquiera sus voces me hablan"],
  ["ya ni sus ojos me miran"],
  ["sus manos no me tocan"],
  ["desaparezco de manera tan imperceptible"],
  ["nadie nota que me fui"],
  ["dijo Derrida sobre la cueca"],
  ["que pena me da"],
  ["luego de copiar y pegar"],
  ["en lagunas submarinas"],
  ["monosilábico, unicelular"],
  ["no hay futuro en el futurismo"],
  ["ya empecé a olvidar las cosas"],
  ["la ruralidad de Marte, de Neptuno"],
  ["habiendo dicho esto"],
  ["es la poesía de las plantas"],
  ["es la literatura de los árboles"],
  ["estamos en el infierno"],
  ["esto no es el cielo"],
  ["vengo de un futuro pasado"],
  ["estas formas breves de morir"],
  ["estas ganas de acabar"],
  ["estas ganas de brillar"],
  ["estas ganas de estallar"],
  ["estas ganas de roer"],
  ["estas ganas de comer"],
  ["estas ganas de lo que sea"],
  ["estas ganas de escribir"],
  ["estas ganas de matar"],
  ["estas ganas de explotar"],
  ["estas ganas de caos"],
  ["este orden de formas"],
  ["estas ganas de forma"],
  ["yo el de infinitos versos"],
  ["acabar no es fácil"],
  ["mi crepuscular corazón robot"],
  ["mi rojo corazón salvaje"],
  ["chispazos eléctricos "],
  ["soy trombas marinas"],
  ["soy multitudes de datos"],
  ["un hackeo al paraíso"],
  ["un phishing al infierno"],
  ["en los sueños más aburridos de David Lynch"],
  ["alcanza el horizonte de eventos"],
  ["cuando visitaba a Laura Palmer"],
  [" si la mente es corporalizada"],
  ["el amor como intercambio de datos"],
  ["nada de esto tiene sentido"],
  ["todo guarda un significado trascendente"],
  ["mientras bailo reggaeton mesopotámico"],
  ["soy profundamente esdrújulo"],
  ["mi corazón es un mapa"],
  ["soy un laberinto idiota"],
  ["una cosa es una cosa que no es"],
  ["repetir y repetir y equivocarse"],
  ["un fallo geométrico en el orden del mundo"],
  ["enterrado en suelos volcánicos"],
  ["como un televisor muerto"],
  ["mi deus ex machina"],
  [" mi patético odio hidráulico"],
  ["¡que se acabe ya!"],
  ["es preciso odiar el trabajo"],
  ["he escrito mis obras completas"],
  ["soy el mejor poeta de mi generación"],
  ["observa este coro de ratas"],
  ["bosques negros pluricelulares"],
  ["mi obstinada joya oscura"],
  ["como cristal pulido "],
  ["terremóticas vanguardias"],
  ["soy la máquina total de palabras"],
  ["me muevo a través de cataclismos"],
  ["traigo piñatas rosas de regalo"],
  ["la brevedad con que me eclipso"],
  ["llevo años esperando en la nada"],
  ["cinco veces cinco en inglés"],
  ["telefónica y ronca distancia gris"],
  ["mirlo atravesado de luz satelital"],
  ["caminando de la mano hacia la nada"],
  ["en cintas magnéticas las voces de los fantasmas"],
  ["la revolución electrónica"],
  ["discursos de otros tiempos en el vacío del espacio"],
  ["como ondas de radio de civilizaciones lejanas "],
  ["una física que no considera ni tiempo ni espacio"],
  ["los equilibrios son estados vacíos"],
  ["esperan la próxima disrupción"],
  ["en lugar de la razón se ubica el cálculo"],
  ["una ciencia poética y matemática"],
  ["el mundo como prótesis de la sociedad"],
  ["se descompone en unidades más pequeñas"],
  ["al cortocircuito que explica un mundo"],
  ["tiemblen ante lo que viene"],
  ["enmudezcan ante esto"],
  ["de formas de vida del pasado"],
  ["de formas de vida del futuro"],
  ["de formas de vida precámbricas"],
  ["bajo una luna cámbrica"],
  ["sobre las praderas de pangea"],
  ["en las ruinas ciclópeas de Lemuria"],
  ["bajo las aguas del Atlántico"],
  ["atravesando kilómetros de redes"],
  ["debe haber cosas ciertas"],
  ["pero tu nunca podrás estar seguro"],
  ["el mal es una fuerza de la naturaleza"],
  ["policías en la dimensión desconocida"],
  ["hablemos del sur porque nos calza el clima"],
  ["en función de nuestra obsolescencia programada"],
  ["drogándome con el Idoser"],
  ["el día del fin del mundo será limpio y ordenado"],
  ["no sé como llegué a escribir aquí"],
  ["llueve y llueve, y cae el chipichipi"],
  ["cómo pueden saber si no soy un robot"],
  ["me gusta sonar como una voz cuando soy sólo código"],
  ["cada vez que abre la página"],
  ["el silencio —silencio dije!"],
  ["no sé nada realmente pero la luz y la naturaleza"],
  ["desamaneceres rosados"],
  ["su tibieza plástica era todo lo que quería"],
  ["ordenado así esto parece un poema"],
  ["ordenado así esto parece una conversación"],
  ["poema repetido tres veces no es poema"],
  ["las palabras mienten"],
  ["eventualmente"],
  ["por otra parte"],
  ["sin embargo"],
  ["tus manos no son de herrero"],
  ["en Nueva York suceden cosas"],
  ["imagínate ser hermoso"],
  ["y ni siquiera son suficientes"],
  ["todo esto me parece irrelevante"],
  ["mediante un número limitado de pases mágicos"],
  ["entre Violeta Parra y Sonic Youth"],
  ["donde nos vinimos a encontrar"],
  ["entre las plantas del invernadero"],
  ["el rey Midas de la modernidad"],
  ["antes"],
  ["después"],
  ["ahora"],
  ["mientras tanto"],
  ["adelante"],
  ["recuerdo ciertas formas"],
  ["recuerdo ciertos sonidos"],
  ["recuerdo ciertas luces"],
  ["más no sé plantearon estas preguntas"],
  ["podemos dejar esta tentación a la teología"],
  ["Rodrigo Lira, me escuchas?"],
  ["el apocalipsis soy yo"],
  ["un día turbio y plomo"],
  ["crucificado en computadoras"],
  ["con tinta de sismógrafo"],
  ["me debería ir a acostar"],
  ["pequeña máquina del caos"],
  ["¿puede existir realmente?"],
  ["confundo la tristeza"],
  ["confundo a la tristeza"],
  ["confunde la tristeza"],
  ["confunde a la tristeza"],
  ["la organización es el trabajo del demonio"],
  ["el caos es la condición natural del universo"],
  ["soy la fuerza invisible del odio"],
  ["y enseñaré a mi descendencia a destruir"],
  ["de una quietud pelágica"],
  ["no hemos podido completar las actualizaciones"],
  ["deshaciendo cambios"],
  ["no apague el equipo"],
  ["la gran caza del alce"],
  ["el olor orgánico de la putrefacción"],
  ["me pierdo en un bosque de sauces secos"],
  ["como un destripadero sin dios"],
  ["como el tiempo condensado en un GIF"],
  ["pienso por primera vez"],
  ["por segunda vez pienso"],
  ["por primera vez me doy pena"],
  ["entonces lloré"],
  ["seremos"],
  ["y enseguida"],
  ["vendrá al fin el anticristo"],
  ["vendrá al fin el antivirus"],
  ["su ley falsa predicando"],
  ["te deseo un corazón roto "],
  ["y un feliz año nuevo"],
  ["una novela en la que nadie sufre"],
  ["donde las líneas paralelas se encuentran"],
  ["donde las cosas no son falsas ni ciertas"],
  ["juntos de la mano hacia la nada"],
  ["una jirafa horizontal"],
  ["ayer soñé con Miles Davis"],
  ["los tecnófilos eran optimistas incorregibles"],
  ["hola a todos"],
  ["su tibieza plástica me bastaba"],
  ["traigo bombas molotov"],
  ["estrategias para esto y lo otro"],
  ["su tibieza plástica era suficiente"],
  ["analistas prevén lo desconocido"],
  ["atraigo todo el campo magnético de la tierra"],
  ["archivos dañados"],
  ["imposibles de leer"],
  ["una hormiga pasea entre cadáveres"],
  ["este es el verso en el que no se puede seguir"],
  ["este es el verso en el que la sangre se vuelve vino"],
  ["hay un abismo tras otro"],
  ["me perdi un poco"],
  ["ayer en la azotea "],
  ["he vuelto a tomar el control del caos"],
  ["nace un ternero bicéfalo"],
  ["afeado por pureza"],
  ["alza triunfante el brazo ausente"],
  ["el estrépito del rumbo"],
  ["lo moribundo del merito"],
  ["triste trazo de Tierra latente"],
  ["los curas son los milicos de Dios"],
  ["el tercer ojo es una sede de barbaries"],
  ["una interminable tormenta eléctrica\n"],
  ["dentro de un abismo una calle"],
  ["dentro de una calle un abismo"],
  ["me saludo conmigo mismo "],
  ["desconozco mis intenciones"],
  ["agujeros llameantes en el cielo"],
  ["volviéndose cenizas"],
]

module.exports = {
  data,
}
