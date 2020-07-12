const windResizeCallbacks = [];
const uyamak={};
//const toolBar=[{"value":"File","icon":"fas fa-file-alt","width":"335","text":"Menu gives options to manage your files","shortcut":[],"items":[{"value":"Cloud organizer","icon":"far fa-folder","function":"alert()","text":"Organize your Uyamak systems on your cloud storage","shortcut":['Ctrl','O',]},{"value":"hl","icon":"fas fa-arrow-left","function":"alert()","text":"Good to go when eveything is fine and also I want to say something more 1","shortcut":[]},{"value":"Save to local machine","icon":"fas fa-download","function":"alert()","text":"Download the Uyamak system to your local device as a file","shortcut":['Ctrl','S',]},{"value":"Load from local machine","icon":"fas fa-upload","function":"alert()","text":"Load a Uyamak system from your local device","shortcut":['Ctrl','L',]},{"value":"hl","icon":"fas fa-arrow-left","function":"alert()","text":"Good to go when eveything is fine and also I want to say something more 1","shortcut":[]},{"value":"Share privately","icon":"fas fa-share-alt-square","function":"alert()","text":"Share Uyamak system with your friends and teachers","shortcut":['Ctrl','J',]},{"value":"Make public","icon":"fas fa-share-alt","function":"alert()","text":"Publish your Uyamak system to the public","shortcut":['Ctrl','Shift','J',]},{"value":"hl","icon":"fas fa-arrow-left","function":"alert()","text":"Good to go when eveything is fine and also I want to say something more 1","shortcut":[]},{"value":"Print","icon":"fas fa-print","function":"alert()","text":"Print the Uyamak system","shortcut":['Ctrl','P',]}]},{"value":"System","icon":"fas fa-project-diagram","width":"400","text":"Menu gives options to manage your Uyamak system","shortcut":[],"items":[{"value":"Show Uyamak library","icon":"fas fa-puzzle-piece","function":"alert()","text":"Displays the Uyamak library drawer where you can find all the Uyamak models","shortcut":['Ctrl','U',]},{"value":"Show Model Editor","icon":"fas fa-edit","function":"alert()","text":"Displays the Uyamak model editor where you can tweak the model settings","shortcut":['Ctrl','E',]},{"value":"Show Simulation drawer","icon":"fas fa-play","function":"alert()","text":"Displays the simulation drawer where you can execute the Uyamak system","shortcut":['Ctrl','Shift','S',]},{"value":"Show Variable manager","icon":"fas fa-equals","function":"ShowModelItem('variablesManager')","text":"Displays the Variable manager where you can add, edit or delete the Uyamak variables.","shortcut":['Ctrl','Shift','V',]},{"value":"hl","icon":"fas fa-arrow-left","function":"alert()","text":"Good to go when eveything is fine and also I want to say something more 1","shortcut":[]},{"value":"Create sub-system","icon":"far fa-object-group","function":"if (mainSystem.graph.isEnabled()) createSubModel();","text":"Creates Uyamak sub-system out of the selected Uyamak models","shortcut":['Ctrl','K',]},{"value":"Dismantle sub-system","icon":"far fa-object-ungroup","function":"if (mainSystem.graph.isEnabled()) ungroupSubModel();","text":"Dismantles all the selected Uyamak sub-systems.","shortcut":['Ctrl','Shift','K',]}]},{"value":"Edit","icon":"fas fa-pen","width":"300","text":"Menu gives options to manipulate the Uyamak system","shortcut":[],"items":[{"value":"Select all","icon":"far fa-check-square","function":"alert()","text":"","shortcut":['Ctrl','A',]},{"value":"Select none","icon":"far fa-square","function":"alert()","text":"","shortcut":['Ctrl','Shift','A',]},{"value":"hl","icon":"fas fa-arrow-left","function":"alert()","text":"","shortcut":[]},{"value":"Cut","icon":"fas fa-cut","function":"alert()","text":"Copies the selected Uyamak models into the clipboard and deletes the original ones","shortcut":['Ctrl','X',]},{"value":"Copy","icon":"fas fa-copy","function":"alert()","text":"Copies the selected Uyamak models into the clipboard","shortcut":['Ctrl','C',]},{"value":"Paste","icon":"fas fa-paste","function":"alert()","text":"Pastes the clipboard Uyamak models to the present Uyamak system","shortcut":['Ctrl','V',]},{"value":"Clone","icon":"fas fa-clone","function":"alert()","text":"Clones the selected Uyamak models","shortcut":['Ctrl','Shift','C',]},{"value":"Delete","icon":"fas fa-trash-alt","function":"if (mainSystem.graph.isEnabled()) mainSystem.graph.removeCells();","text":"Delete the selected Uyamak models and Sub-systems","shortcut":['Delete',]},{"value":"hl","icon":"fas fa-arrow-left","function":"alert()","text":"Good to go when eveything is fine and also I want to say something more 1","shortcut":[]},{"value":"Undo","icon":"fas fa-undo","function":"mainSystem.undoManager.undo();","text":"Undo the recent changes","shortcut":['Ctrl','Z',]},{"value":"Redo","icon":"fas fa-redo","function":"mainSystem.undoManager.redo();","text":"Redo the recent changes","shortcut":['Ctrl','Shift','Z',]}]},{"value":"View","icon":"fas fa-desktop","width":"390","text":"Menu gives different options to visualize the Uyamak system","shortcut":[],"items":[{"value":"Zoom in","icon":"fas fa-search-plus","function":"mainSystem.graph.zoomIn();","text":"Zooms in","shortcut":['Ctrl','+',]},{"value":"Zoom out","icon":"fas fa-search-minus","function":"mainSystem.graph.zoomOut();","text":"Zooms out","shortcut":['Ctrl','-',]},{"value":"Original size","icon":"fas fa-compress","function":"mainSystem.graph.zoomActual();","text":"Shows the original size. Some items may be out of view. You can see them by scrolling","shortcut":['Ctrl','0',]},{"value":"Fit all","icon":"fas fa-expand","function":"mainSystem.graph.fit();","text":"Shows the complete Uyamak system","shortcut":['Ctrl','Shift','0',]},{"value":"hl","icon":"fas fa-arrow-left","function":"alert()","text":"Good to go when eveything is fine and also I want to say something more 1","shortcut":[]},{"value":"Minimize  subsystem(s)","icon":"fas fa-window-minimize","function":"foldItems();","text":"Minimizes the selected subsystem. If nothing is selected, all the sub-systems will be minimized","shortcut":['Ctrl','M',]},{"value":"Maximize  subsystem(s)","icon":"fas fa-window-maximize","function":"foldItems(false);","text":"Maximizes the selected subsystem. If nothing is selected, all the sub-systems will be maximized","shortcut":['Ctrl','Shift','M',]},{"value":"hl","icon":"fas fa-window-maximize","function":"","text":"Good to go when eveything is fine and also I want to say something more 1","shortcut":[]},{"value":"Execution order","icon":"fas fa-sort-numeric-up-alt","function":"displayExecutionOrder()","text":"Shows simulation order and errors","shortcut":['Ctrl','R',]},{"value":"hl","icon":"fas fa-window-maximize","function":"alert()","text":"Good to go when eveything is fine and also I want to say something more 1","shortcut":[]},{"value":"System outline","icon":"fas fa-image","function":"alert()","text":"Shows outline of the Uyamak system in a small window on the top right corner","shortcut":['Ctrl','F',]},{"value":"Show/Hide Grid lines","icon":"fas fa-border-all","function":"alert()","text":"Shows or hide the grid lines","shortcut":['Ctrl','G',]},{"value":"Toggle snap to grid","icon":"fas fa-magnet","function":"alert()","text":"When snap to grid is activated, the blocks are moved at a steps instead of smoothly","shortcut":['Ctrl','T',]},{"value":"Keyboard shortcuts","icon":"far fa-keyboard","function":"alert()","text":"Displays all the keyboard shortcuts","shortcut":['Ctrl','Y',]}]},{"value":"Account","icon":"fas fa-user-alt","width":"315","text":"Menu gives options to manage the user account","shortcut":[],"items":[{"value":"Profile","icon":"fas fa-user-cog","function":"alert()","text":"Opens another page where you can manage your Uyamak profile","shortcut":[]},{"value":"Extend licence period","icon":"fas fa-ticket-alt","function":"alert()","text":"Lets you extend the license period","shortcut":['Ctrl','B',]},{"value":"Sign out","icon":"fas fa-door-open","function":"alert()","text":"Signing out","shortcut":['Ctrl','W',]}]},{"value":"Help","icon":"far fa-life-ring","width":"275","text":"Menu gives access to documentation and help","shortcut":[],"items":[{"value":"Documentation","icon":"fas fa-book","function":"alert()","text":"Takes you to the documentation page","shortcut":['Ctrl','D',]},{"value":"Context help","icon":"far fa-question-circle","function":"alert()","text":"Shows the documentation for the selected Uyamak model","shortcut":['Ctrl','H',]},{"value":"hl","icon":"fas fa-window-maximize","function":"alert()","text":"Shows the documentation for the selected Uyamak model","shortcut":[]},{"value":"About","icon":"fas fa-info","function":"alert()","text":"Shows the documentation for the selected Uyamak model","shortcut":[]}]},];
const GUIText={"en-us":{"hide":"Hide","hide_left_desc":"Hides the left pane","hide_right_desc":"Hides the right pane","errorShortWidth":"Your screen's width is too small to run this app. ","errorShortHeight":"Your screen's height is too small to run this app. ","key_backspace":"Backspace","key_tab":"Tab","key_enter":"Enter","key_shift":"Shift","key_ctrl":"Ctrl","key_alt":"Alt","key_pause":"Pause","key_caps_lock":"Caps lock","key_escape":"Escape","key_page_up":"Page up","key_page_down":"Page down","key_end":"End","key_home":"Home","key_left_arrow":"Left arrow","key_up_arrow":"Up arrow","key_right_arrow":"Right arrow","key_down_arrow":"Down arrow","key_insert":"Insert","key_delete":"Delete","key_0":"0","key_1":"1","key_2":"2","key_3":"3","key_4":"4","key_5":"5","key_6":"6","key_7":"7","key_8":"8","key_9":"9","key_a":"A","key_b":"B","key_c":"C","key_d":"D","key_e":"E","key_f":"F","key_g":"G","key_h":"H","key_i":"I","key_j":"J","key_k":"K","key_l":"L","key_m":"M","key_n":"N","key_o":"O","key_p":"P","key_q":"Q","key_r":"R","key_s":"S","key_t":"T","key_u":"U","key_v":"V","key_w":"W","key_x":"X","key_y":"Y","key_z":"Z","key_left_win":"Left ⊞","key_right_win":"Right ⊞","key_select":"Select","key_num_0":"Num 0","key_num_1":"Num 1","key_num_2":"Num 2","key_num_3":"Num 3","key_num_4":"Num 4","key_num_5":"Num 5","key_num_6":"Num 6","key_num_7":"Num 7","key_num_8":"Num 8","key_num_9":"Num 9","key_mul":"Num *","key_add":"Num +","key_sub":"Num -","key_point":"Num .","key_div":"Num /","key_f1":"F1","key_f2":"F2","key_f3":"F3","key_f4":"F4","key_f5":"F5","key_f6":"F6","key_f7":"F7","key_f8":"F8","key_f9":"F9","key_f10":"F10","key_f11":"F11","key_f12":"F12","key_num_lock":"Num","key_scroll_lock":"Scroll","key_semi_colon":";","key_equal_sign":"=","key_comma":",","key_dash":"-","key_period":".","key_forward_slash":"/","key_grave_accent":"`","key_open_bracket":"[","key_back_slash":"\\","key_close_braket":"]","key_single_quote":"'","settings":"Settings","theme":"Theme","theme-light":"Light mode","theme-dark":"Dark mode","language":"Language","en-us":"English (United states)","es-mx":"Español (México)","sblocks":"Search blocks…","sResults":"Search results","sResDesc":"Blocks matching the search query.","gridLines":"Gridlines","gLinesMinor":"Minor","gLinesMajor":"Major","gLinesMega":"Mega","navi":"Navigation","gridSize":"Grid size","showOutline":"Show outline","guidesEnabled":"Enable guides","oSettings":"Other settings","vManager":"Variable manager","constants":"Constants","variables":"Variables","var":"Variable","value":"Value","errSameBlkConn":"These two terminals are already connected","errInpInpConn":"A source is already connected","errOutOutConn":"Output cannot be connected to another output","errOnlyOneInp":"Only one input can be connected per terminal","errUblPlcBlock":"Unable to use this block. Please contact our support team.","cPolicyText":"We use cookies to improve the performance.","cPolicyLink":"Cookie policy","accept":"Accept","aNewVar":"Add a new variable","save":"Save","cancel":"Cancel","label":"Label","noOfIns":"Input terminals count","noOfOuts":"Output terminals count","preview":"Preview","params":"Parameters","functionality":"Functionality","aChanges":"Apply changes","rChanges":"Reset Changes","orientation":"Orientation","showLabels":"Show  labels","name":"Name","errUnablGrping":"Unable to group the selected items","subModel":"Sub model","enterFileName":"Enter a filename to save","myUmkModel":"myUyamakModel","rRealTime":"Run at real-time","endTime":"End time in seconds (negative for &infin;)","stepSize":"Step size in milliseconds","run":"Run simulation","stop":"Stop simulation","pause":"Pause simulation","nSteps":"Next N-Steps to the simulation","confirmLoss":"This operation will close the present model.\nAny unsaved data will be lost.\n\nDo you want to proceed?","errorGen":"Error: Unable to perform this action","aLoop":"Error: Possible algebraic loop","showExeOrder":"Show execution order","mDesign":"Design mode","mSim":"Simulating","mSimPause":"Simulation paused","k169":"Incompatible browser. Uyamak requires a modern browser to run the simulation.","k170":"There is no model to simulate. Pull blocks from the library and place on the graph.","k171":"Unable to ungroup the selected items","k172":"Unable to decode the parameter value. Try updating the variables.","k173":"Some parameters are incorrect. Please edit blocks with warning symbol.","simErr":"Simulation error","chartLang":"en","sOEvery":"Record output for every X samples","mHis":"History points in the memory per second","hideGraphText":"Hide text inside the blocks","errorParsing":"Unable to parse the input. If required, update your variables in the variable manager.","errParamEntry":"Parameter error","errDetails":"Unknown error. Please contact the support team if  it continous.","errCompat":"Compatibility error. We cannot proceed to save. Please a look at the functionality and correct your parameters.","snapToGrid":"Snap to grid","locFMgr":"Local file manager","saveToLMach":"Save to local machine","loadFrmLMach":"Load from local machine","import":"Import","open":"Open","model":"Uyamak model","vars":"Variables","simSet":"Simulation settings","guiSet":"Editor settings","sFile":"Select a file by clicking here or you can drag and drop your file here.","errFSize":"File is too big to open. Contact support for more information.","errCrpt":"The selected file is empty or corrupted","for":"for","intType":"Integration type","intTs":"Integrals are updated every","wMode":"Wire mode"},"es-mx":{"hide":"Esconder","hide_left_desc":"Hides the left pane","hide_right_desc":"Hides the right pane","errorShortWidth":"El ancho de su pantalla es demasiado pequeño para ejecutar esta aplicación.","errorShortHeight":"La altura de su pantalla es demasiado pequeña para ejecutar esta aplicación.","key_backspace":"Backspace","key_tab":"Tab","key_enter":"Enter","key_shift":"Shift","key_ctrl":"Ctrl","key_alt":"Alt","key_pause":"Pause","key_caps_lock":"Caps lock","key_escape":"Escape","key_page_up":"Page up","key_page_down":"Page down","key_end":"End","key_home":"Home","key_left_arrow":"Left arrow","key_up_arrow":"Up arrow","key_right_arrow":"Right arrow","key_down_arrow":"Down arrow","key_insert":"Insert","key_delete":"Delete","key_0":"0","key_1":"1","key_2":"2","key_3":"3","key_4":"4","key_5":"5","key_6":"6","key_7":"7","key_8":"8","key_9":"9","key_a":"A","key_b":"B","key_c":"C","key_d":"D","key_e":"E","key_f":"F","key_g":"G","key_h":"H","key_i":"I","key_j":"J","key_k":"K","key_l":"L","key_m":"M","key_n":"N","key_o":"O","key_p":"P","key_q":"Q","key_r":"R","key_s":"S","key_t":"T","key_u":"U","key_v":"V","key_w":"W","key_x":"X","key_y":"Y","key_z":"Z","key_left_win":"Left ⊞","key_right_win":"Right ⊞","key_select":"Select","key_num_0":"Num 0","key_num_1":"Num 1","key_num_2":"Num 2","key_num_3":"Num 3","key_num_4":"Num 4","key_num_5":"Num 5","key_num_6":"Num 6","key_num_7":"Num 7","key_num_8":"Num 8","key_num_9":"Num 9","key_mul":"Num *","key_add":"Num +","key_sub":"Num -","key_point":"Num .","key_div":"Num /","key_f1":"F1","key_f2":"F2","key_f3":"F3","key_f4":"F4","key_f5":"F5","key_f6":"F6","key_f7":"F7","key_f8":"F8","key_f9":"F9","key_f10":"F10","key_f11":"F11","key_f12":"F12","key_num_lock":"Num","key_scroll_lock":"Scroll","key_semi_colon":";","key_equal_sign":"=","key_comma":",","key_dash":"-","key_period":".","key_forward_slash":"/","key_grave_accent":"`","key_open_bracket":"[","key_back_slash":"\\","key_close_braket":"]","key_single_quote":"'","settings":"Configuraciones","theme":"Tema","theme-light":"Modo de luz","theme-dark":"Modo oscuro","language":"Idioma","en-us":"Inglés Estados Unidos)","es-mx":"Español (México)","sblocks":"Buscar bloques…","sResults":"Resultados de la búsqueda","sResDesc":"Bloques que coinciden con la consulta de búsqueda.","gridLines":"Líneas de cuadrícula","gLinesMinor":"Menor","gLinesMajor":"Mayor","gLinesMega":"Mega","navi":"Navegación","gridSize":"Tamaño de la cuadrícula","showOutline":"Mostrar esquema","guidesEnabled":"Habilitar guías","oSettings":"Otros ajustes","vManager":"Administrador de variables","constants":"Constantes","variables":"Variables","var":"Variable","value":"Valor","errSameBlkConn":"Estos dos terminales ya están conectados","errInpInpConn":"Una fuente ya está conectada","errOutOutConn":"La salida no se puede conectar a otra salida","errOnlyOneInp":"Solo se puede conectar una entrada por terminal","errUblPlcBlock":"No se puede usar este bloque. Por favor contacte a nuestro equipo de soporte.","cPolicyText":"Utilizamos cookies para mejorar el rendimiento.","cPolicyLink":"Política de cookies","accept":"Aceptar","aNewVar":"Agregar una nueva variable","save":"Guardar","cancel":"Cancelar","label":"Etiqueta","noOfIns":"Conteo de terminales de entrada","noOfOuts":"Los terminales de salida cuentan","preview":"Vista previa","params":"Parámetros","functionality":"Funcionalidad","aChanges":"Aplicar los cambios","rChanges":"Restablecer cambios","orientation":"Orientación","showLabels":"Mostrar etiquetas","name":"Nombre","errUnablGrping":"No se pueden agrupar los elementos seleccionados","subModel":"Submodelo","enterFileName":"Ingrese un nombre de archivo para guardar","myUmkModel":"miModeloDeUyamak","rRealTime":"Corre en tiempo real","endTime":"Tiempo de finalización en segundos (negativo para &infin;)","stepSize":"Tamaño de paso en milisegundos","run":"Ejecutar simulación","stop":"Detener la simulación","pause":"Pausa simulación","nSteps":"N pasos siguientes a la simulación","confirmLoss":"Esta operación cerrará el modelo actual.\nCualquier información no guardada se perderá.\n\nQuieres proceder?","errorGen":"Error: no se puede realizar esta acción","aLoop":"Error: Posible lazo algebraico","showExeOrder":"Mostrar orden de ejecución","mDesign":"Modo de diseño","mSim":"Simulando","mSimPause":"Simulación en pausa","k169":"Navegador incompatible. Uyanmak requiere un navegador moderno para ejecutar la simulación.","k170":"No hay modelo para simular. Extraiga bloques de la biblioteca y colóquelos en el gráfico.","k171":"No se pueden desagrupar los elementos seleccionados","k172":"No se puede decodificar el valor del parámetro. Intenta actualizar las variables.","k173":"Algunos parámetros son incorrectos. Edite los bloques con el símbolo de advertencia.","simErr":"Error de simulación","chartLang":"es","sOEvery":"Grabar salida para cada X muestras","mHis":"Puntos de historia en la memoria por segundo","hideGraphText":"Ocultar texto dentro de los bloques","errorParsing":"No se puede analizar la entrada. Si es necesario, actualice sus variables en el administrador de variables.","errParamEntry":"Error de parametro","errDetails":"Error desconocido. Póngase en contacto con el equipo de soporte si es continuo.","errCompat":"Error de compatibilidad No podemos proceder a guardar. Observe la funcionalidad y corrija sus parámetros.","snapToGrid":"Encajar a la cuadricula","locFMgr":"Administrador de archivos locales","saveToLMach":"Guardar en máquina local","loadFrmLMach":"Cargar desde máquina local","import":"Importar","open":"Abierto","model":"Modelo Uyamak","vars":"Variables","simSet":"Configuraciones de simulación","guiSet":"Configuraciones del editor","sFile":"Seleccione un archivo haciendo clic aquí o puede arrastrar y soltar su archivo aquí.","errFSize":"El archivo es demasiado grande para abrir. Póngase en contacto con el soporte para más información.","errCrpt":"El archivo seleccionado está vacío o dañado.","for":"para","intType":"Tipo de integración","intTs":"Se actualiza integrales cada","wMode":"Modo de cable"}};
const menu = [{"icon":"fas fa-file-alt","kbShort":{"ctrl":false,"alt":true,"shift":false,"key":"f","keycode":"70","langCode":"key_f"},"text":{"en-us":"File","es-mx":"Archivo"},"moreInfo":{"en-us":"Menu gives options to manage your files","es-mx":"El menú ofrece opciones para administrar sus archivos"},"subMenu":[{"icon":"far fa-file","kbShort":{"ctrl":false,"alt":false,"shift":false,"key":"","keycode":"","langCode":""},"text":{"en-us":"New Uyamak model","es-mx":"Nuevo modelo de Uyamak"},"moreInfo":{"en-us":"Lets you create a new Uyamak model","es-mx":"Le permite crear un nuevo modelo Uyamak"},"prtBelow":true,"func":"uyamakFileManager.newModel()"},{"icon":"fas fa-cloud","kbShort":{"ctrl":true,"alt":false,"shift":true,"key":"l","keycode":"76","langCode":"key_l"},"text":{"en-us":"Cloud organizer","es-mx":"Organizador de la nube"},"moreInfo":{"en-us":"Organize your Uyamak systems on your cloud storage","es-mx":"Organice sus sistemas Uyamak en su almacenamiento en la nube"},"prtBelow":false,"func":"alert()"},{"icon":"fas fa-save","kbShort":{"ctrl":true,"alt":false,"shift":true,"key":"f","keycode":"70","langCode":"key_f"},"text":{"en-us":"File manager","es-mx":"Administrador de archivos"},"moreInfo":{"en-us":"Lets you import, open and save the model, variables, and settings","es-mx":"Le permite importar, abrir y guardar el modelo, las variables y la configuración"},"prtBelow":true,"func":"uyamak.lFManagerVue.showGUI()"},{"icon":"fas fa-share-alt-square","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"j","keycode":"74","langCode":"key_j"},"text":{"en-us":"Share privately","es-mx":"Comparte en privado"},"moreInfo":{"en-us":"Share Uyamak system with your friends and teachers","es-mx":"Comparte el sistema Uyamak con tus amigos y maestros"},"prtBelow":false,"func":"alert()"},{"icon":"fas fa-share-alt","kbShort":{"ctrl":true,"alt":false,"shift":true,"key":"j","keycode":"74","langCode":"key_j"},"text":{"en-us":"Make public","es-mx":"Hacer público"},"moreInfo":{"en-us":"Publish your Uyamak system to the public","es-mx":"Publica tu sistema Uyamak al público"},"prtBelow":true,"func":"alert()"},{"icon":"fas fa-print","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"p","keycode":"80","langCode":"key_p"},"text":{"en-us":"Print","es-mx":"Impresión"},"moreInfo":{"en-us":"Print the Uyamak system","es-mx":"Imprime el sistema Uyamak"},"prtBelow":false,"func":"alert()"}]},{"icon":"fas fa-project-diagram","kbShort":{"ctrl":false,"alt":true,"shift":false,"key":"s","keycode":"83","langCode":"key_s"},"text":{"en-us":"System","es-mx":"Sistema"},"moreInfo":{"en-us":"Menu gives options to manage your Uyamak system","es-mx":"El menú ofrece opciones para administrar su sistema Uyamak"},"subMenu":[{"icon":"fas fa-puzzle-piece","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"u","keycode":"85","langCode":"key_u"},"text":{"en-us":"Show Uyamak library","es-mx":"Mostrar biblioteca Uyamak"},"moreInfo":{"en-us":"Displays the Uyamak library drawer where you can find all the Uyamak models","es-mx":"Muestra el cajón de la biblioteca Uyamak donde puedes encontrar todos los modelos Uyamak"},"prtBelow":false,"func":"document.getElementById('btn-blocks').click()"},{"icon":"fas fa-edit","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"e","keycode":"69","langCode":"key_e"},"text":{"en-us":"Show Model Editor","es-mx":"Mostrar editor de modelos"},"moreInfo":{"en-us":"Displays the Uyamak model editor where you can tweak the model settings","es-mx":"Muestra el editor de modelos de Uyamak donde puede ajustar la configuración del modelo"},"prtBelow":false,"func":"document.getElementById('btn-edit').click()"},{"icon":"fas fa-play","kbShort":{"ctrl":true,"alt":false,"shift":true,"key":"s","keycode":"83","langCode":"key_s"},"text":{"en-us":"Show Simulation drawer","es-mx":"Mostrar cajón de simulación"},"moreInfo":{"en-us":"Mostrar administrador de variables","es-mx":"Muestra el cajón de simulación donde puede ejecutar el sistema Uyamak"},"prtBelow":false,"func":"alert()"},{"icon":"fas fa-equals","kbShort":{"ctrl":true,"alt":false,"shift":true,"key":"v","keycode":"86","langCode":"key_v"},"text":{"en-us":"Show variable manager","es-mx":"Mostrar administrador de variables"},"moreInfo":{"en-us":"Displays the system constants and lets you add variables to use in your models","es-mx":"Muestra las constantes del sistema y le permite agregar variables para usar en sus modelos"},"prtBelow":true,"func":"varManagerVue.showGUI()"},{"icon":"far fa-object-group","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"k","keycode":"75","langCode":"key_k"},"text":{"en-us":"Create sub-system","es-mx":"Crear subsistema"},"moreInfo":{"en-us":"Creates Uyamak sub-system out of the selected Uyamak models","es-mx":"Crea el subsistema Uyamak a partir de los modelos Uyamak seleccionados."},"prtBelow":false,"func":"mainSystem.graph.createSubModel()"},{"icon":"far fa-object-ungroup","kbShort":{"ctrl":true,"alt":false,"shift":true,"key":"k","keycode":"75","langCode":"key_k"},"text":{"en-us":"Dismantle sub-system","es-mx":"Desmontar subsistema"},"moreInfo":{"en-us":"Dismantles all the selected Uyamak sub-systems.","es-mx":"Desmantela todos los subsistemas Uyamak seleccionados."},"prtBelow":false,"func":"mainSystem.graph.ungroupSubModel()"}]},{"icon":"fas fa-pen","kbShort":{"ctrl":false,"alt":true,"shift":false,"key":"e","keycode":"69","langCode":"key_e"},"text":{"en-us":"Edit","es-mx":"Editar"},"moreInfo":{"en-us":"Menu gives options to manipulate the Uyamak system","es-mx":"Menú da opciones para manipular el sistema Uyamak"},"subMenu":[{"icon":"fas fa-cogs","kbShort":{"ctrl":true,"alt":true,"shift":true,"key":"s","keycode":"83","langCode":"key_s"},"text":{"en-us":"Settings","es-mx":"Configuraciones"},"moreInfo":{"en-us":"Lets you change settings","es-mx":"Le permite cambiar configuraciones"},"prtBelow":true,"func":"settingsVue.showGUI()"},{"icon":"far fa-check-square","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"a","keycode":"65","langCode":"key_a"},"text":{"en-us":"Select all","es-mx":"Seleccionar todo"},"moreInfo":{"en-us":"Select all the blocks","es-mx":"Selecciona todos los bloques"},"prtBelow":false,"func":"mainSystem.graph.setSelectionCells(mainSystem.graph.getChildCells())"},{"icon":"far fa-square","kbShort":{"ctrl":true,"alt":false,"shift":true,"key":"a","keycode":"65","langCode":"key_a"},"text":{"en-us":"Select none","es-mx":"No seleccionar ninguno"},"moreInfo":{"en-us":"Deselect all the blocks","es-mx":"Anule la selección de todos los bloques."},"prtBelow":true,"func":"mainSystem.graph.setSelectionCells([])"},{"icon":"fas fa-cut","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"x","keycode":"88","langCode":"key_x"},"text":{"en-us":"Cut","es-mx":"Cortar"},"moreInfo":{"en-us":"Copies the selected Uyamak models into the clipboard and deletes the original ones","es-mx":"Copia los modelos Uyamak seleccionados en el portapapeles y elimina los originales."},"prtBelow":false,"func":"uyamakCbManager.cut()"},{"icon":"fas fa-copy","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"c","keycode":"67","langCode":"key_c"},"text":{"en-us":"Copy","es-mx":"Copiar"},"moreInfo":{"en-us":"Copies the selected Uyamak models into the clipboard","es-mx":"Copia los modelos Uyamak seleccionados en el portapapeles"},"prtBelow":false,"func":"uyamakCbManager.copy()"},{"icon":"fas fa-paste","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"v","keycode":"86","langCode":"key_v"},"text":{"en-us":"Paste","es-mx":"Pegar"},"moreInfo":{"en-us":"Pastes the clipboard Uyamak models to the present Uyamak system","es-mx":"Pega los modelos de portapapeles Uyamak en el sistema Uyamak actual"},"prtBelow":false,"func":"uyamakCbManager.paste()"},{"icon":"fas fa-clone","kbShort":{"ctrl":true,"alt":false,"shift":true,"key":"c","keycode":"67","langCode":"key_c"},"text":{"en-us":"Clone","es-mx":"Clon"},"moreInfo":{"en-us":"Clones the selected Uyamak models","es-mx":"Clona los modelos Uyamak seleccionados"},"prtBelow":false,"func":"uyamakCbManager.clone()"},{"icon":"fas fa-trash-alt","kbShort":{"ctrl":false,"alt":false,"shift":false,"key":"delete","keycode":"46","langCode":"key_delete"},"text":{"en-us":"Delete","es-mx":"Eliminar"},"moreInfo":{"en-us":"Delete the selected Uyamak models and Sub-systems","es-mx":"Eliminar los modelos y subsistemas Uyamak seleccionados"},"prtBelow":true,"func":"if (mainSystem.graph.isEnabled()) mainSystem.graph.removeCells(null,false)"},{"icon":"fas fa-undo","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"z","keycode":"90","langCode":"key_z"},"text":{"en-us":"Undo","es-mx":"Deshacer"},"moreInfo":{"en-us":"Undo the recent changes","es-mx":"Deshacer los cambios recientes"},"prtBelow":false,"func":"mainSystem.undoManager.undo()"},{"icon":"fas fa-redo","kbShort":{"ctrl":true,"alt":false,"shift":true,"key":"z","keycode":"90","langCode":"key_z"},"text":{"en-us":"Redo","es-mx":"Rehacer"},"moreInfo":{"en-us":"Redo the recent changes","es-mx":"Rehacer los cambios recientes"},"prtBelow":false,"func":"mainSystem.undoManager.redo()"}]},{"icon":"fas fa-location-arrow","kbShort":{"ctrl":false,"alt":true,"shift":false,"key":"n","keycode":"78","langCode":"key_n"},"text":{"en-us":"Navigate","es-mx":"Navegar"},"moreInfo":{"en-us":"Contains the commands to navigates through the graph","es-mx":"Contiene los comandos para navegar a través del gráfico."},"subMenu":[{"icon":"fas fa-search-plus","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"add","keycode":"107","langCode":"key_add"},"text":{"en-us":"Zoom in","es-mx":"Acercarse"},"moreInfo":{"en-us":"Zooms in","es-mx":"Se acerca"},"prtBelow":false,"func":"mainSystem.navigate('zoomIn')"},{"icon":"fas fa-search-minus","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"subtract","keycode":"109","langCode":"key_sub"},"text":{"en-us":"Zoom out","es-mx":"Disminuir el zoom"},"moreInfo":{"en-us":"Zooms out","es-mx":"Se aleja"},"prtBelow":false,"func":"mainSystem.navigate('zoomOut')"},{"icon":"fas fa-compress","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"k_0","keycode":"48","langCode":"key_0"},"text":{"en-us":"Original size","es-mx":"Tamaño original"},"moreInfo":{"en-us":"Shows the original size. Some items may be out of view. You can see them by scrolling","es-mx":"Muestra el tamaño original. Algunos artículos pueden estar fuera de la vista. Puedes verlos desplazándote"},"prtBelow":false,"func":"mainSystem.navigate('zoomActual')"},{"icon":"fas fa-expand","kbShort":{"ctrl":true,"alt":false,"shift":true,"key":"k_0","keycode":"48","langCode":"key_0"},"text":{"en-us":"Fit all","es-mx":"Ajustar todo"},"moreInfo":{"en-us":"Shows the complete Uyamak system","es-mx":"Muestra el sistema Uyamak completo."},"prtBelow":true,"func":"mainSystem.navigate('fit')"},{"icon":"fab fa-vine","kbShort":{"ctrl":true,"alt":true,"shift":true,"key":"a","keycode":"65","langCode":"key_a"},"text":{"en-us":"System outline","es-mx":"Esquema del sistema"},"moreInfo":{"en-us":"Shows outline of the Uyamak system in a small window on the top right corner","es-mx":"Muestra el esquema del sistema Uyamak en una pequeña ventana en la esquina superior derecha"},"prtBelow":false,"func":"alert()"}]},{"icon":"fas fa-desktop","kbShort":{"ctrl":false,"alt":true,"shift":false,"key":"v","keycode":"86","langCode":"key_v"},"text":{"en-us":"View","es-mx":"Ver"},"moreInfo":{"en-us":"Menu gives different options to visualize the Uyamak system","es-mx":"El menú ofrece diferentes opciones para visualizar el sistema Uyamak"},"subMenu":[{"icon":"fas fa-desktop","kbShort":{"ctrl":true,"alt":true,"shift":true,"key":"f","keycode":"70","langCode":"key_f"},"text":{"en-us":"Full screen","es-mx":"Pantalla completa"},"moreInfo":{"en-us":"Makes the app run on full screen","es-mx":"Hace que la aplicación se ejecute en pantalla completa"},"prtBelow":false,"func":"launchFullscreen()"},{"icon":"fas fa-window-minimize","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"m","keycode":"77","langCode":"key_m"},"text":{"en-us":"Minimize  subsystem(s)","es-mx":"Minimizar subsistema (s)"},"moreInfo":{"en-us":"Minimizes the selected subsystem. If nothing is selected, all the sub-systems will be minimized","es-mx":"Minimiza el subsistema seleccionado. Si no se selecciona nada, todos los subsistemas se minimizarán."},"prtBelow":false,"func":"mainSystem.graph.foldItems(true)"},{"icon":"fas fa-window-maximize","kbShort":{"ctrl":true,"alt":false,"shift":true,"key":"m","keycode":"77","langCode":"key_m"},"text":{"en-us":"Maximize  subsystem(s)","es-mx":"Maximizar subsistema (s)"},"moreInfo":{"en-us":"Maximizes the selected subsystem. If nothing is selected, all the sub-systems will be maximized","es-mx":"Maximiza el subsistema seleccionado. Si no se selecciona nada, todos los subsistemas se maximizarán"},"prtBelow":true,"func":"mainSystem.graph.foldItems(false)"},{"icon":"fas fa-sync-alt","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"r","keycode":"82","langCode":"key_r"},"text":{"en-us":"Rotate clockwise","es-mx":"Girar en el sentido de las agujas del reloj"},"moreInfo":{"en-us":"Rotates the selected blocks in the clockwise direction","es-mx":"Gira los bloques seleccionados en el sentido de las agujas del reloj."},"prtBelow":false,"func":"editorVue.rotateAll(true)"},{"icon":"fas fa-sync-alt fa-flip-horizontal","kbShort":{"ctrl":true,"alt":false,"shift":true,"key":"r","keycode":"82","langCode":"key_r"},"text":{"en-us":"Rotate counter-clockwise","es-mx":"Girar en el sentido contrario de las agujas del reloj"},"moreInfo":{"en-us":"Rotates the selected blocks in the counter-clockwise direction","es-mx":"Gira los bloques seleccionados en sentido antihorario"},"prtBelow":true,"func":"editorVue.rotateAll(false)"},{"icon":"fas fa-clone","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"f","keycode":"70","langCode":"key_f"},"text":{"en-us":"Bring to front","es-mx":"Traer al frente"},"moreInfo":{"en-us":"Bring the selected blocks to the front","es-mx":"Trae los bloques seleccionados al frente"},"prtBelow":false,"func":"mainSystem.graph.orderCells(false);mainSystem.refresh()"},{"icon":"fas fa-clone fa-rotate-180","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"b","keycode":"66","langCode":"key_b"},"text":{"en-us":"Send to back","es-mx":"Mandado hacia atras"},"moreInfo":{"en-us":"Send the selected blocks to back","es-mx":"Enviar los bloques seleccionados al fondo"},"prtBelow":false,"func":"mainSystem.graph.orderCells(true);mainSystem.refresh()"},{"icon":"fas fa-sort-numeric-up-alt","kbShort":{"ctrl":false,"alt":false,"shift":false,"key":"","keycode":"","langCode":""},"text":{"en-us":"Execution order","es-mx":"Orden de ejecución"},"moreInfo":{"en-us":"Shows simulation order and errors","es-mx":"Muestra el orden de simulación y los errores."},"prtBelow":false,"func":"simVue.displayExecutionOrder()"}]},{"icon":"fas fa-user-alt","kbShort":{"ctrl":false,"alt":true,"shift":false,"key":"a","keycode":"65","langCode":"key_a"},"text":{"en-us":"Account","es-mx":"Cuenta"},"moreInfo":{"en-us":"Menu gives options to manage the user account","es-mx":"El menú ofrece opciones para administrar la cuenta de usuario"},"subMenu":[{"icon":"fas fa-user-cog","kbShort":{"ctrl":false,"alt":false,"shift":false,"key":"","keycode":"","langCode":""},"text":{"en-us":"Profile","es-mx":"Perfil"},"moreInfo":{"en-us":"Opens another page where you can manage your Uyamak profile","es-mx":"Abre otra página donde puedes administrar tu perfil de Uyamak"},"prtBelow":false,"func":"alert()"},{"icon":"fas fa-ticket-alt","kbShort":{"ctrl":true,"alt":false,"shift":true,"key":"b","keycode":"66","langCode":"key_b"},"text":{"en-us":"Extend licence period","es-mx":"Extender el período de licencia"},"moreInfo":{"en-us":"Lets you extend the license period","es-mx":"Le permite extender el período de licencia."},"prtBelow":false,"func":"alert()"},{"icon":"fas fa-door-open","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"w","keycode":"87","langCode":"key_w"},"text":{"en-us":"Sign out","es-mx":"desconectar"},"moreInfo":{"en-us":"Signing out","es-mx":"Cerrando sesión"},"prtBelow":false,"func":"alert()"}]},{"icon":"far fa-life-ring","kbShort":{"ctrl":false,"alt":true,"shift":false,"key":"h","keycode":"72","langCode":"key_h"},"text":{"en-us":"Help","es-mx":"Ayuda"},"moreInfo":{"en-us":"Menu gives access to documentation and help","es-mx":"El menú da acceso a la documentación y ayuda"},"subMenu":[{"icon":"fas fa-book","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"d","keycode":"68","langCode":"key_d"},"text":{"en-us":"Documentation","es-mx":"Documentación"},"moreInfo":{"en-us":"Takes you to the documentation page","es-mx":"Te lleva a la página de documentación"},"prtBelow":false,"func":"alert()"},{"icon":"far fa-question-circle","kbShort":{"ctrl":true,"alt":false,"shift":false,"key":"h","keycode":"72","langCode":"key_h"},"text":{"en-us":"Context help","es-mx":"Ayuda contextual"},"moreInfo":{"en-us":"Shows the documentation for the selected Uyamak model","es-mx":"Muestra la documentación para el modelo Uyamak seleccionado."},"prtBelow":true,"func":"alert()"},{"icon":"fas fa-info","kbShort":{"ctrl":false,"alt":false,"shift":false,"key":"","keycode":"","langCode":""},"text":{"en-us":"About","es-mx":"Acerca de"},"moreInfo":{"en-us":"Shows the documentation for the selected Uyamak model","es-mx":"Muestra la documentación para el modelo Uyamak seleccionado."},"prtBelow":false,"func":"alert()"}]}];
const settings  = {lang:"en-us", theme: "theme-light", gLinesMinor: false, gLinesMajor: true, gLinesMega: false, showOutline: false, gridSize: 12, guidesEnabled: true, showLabels: true, showExeOrder: false, snapToGrid: true};
const suspendUserInterface = {
  suspendOrders: {},
  addOrder: function (order) {
      let key = Date.now();
      this.suspendOrders[key] = order;
      this.suspendInterface();
      return key;
  },
  removeOrder: function (oKey) {
      delete this.suspendOrders[oKey];
      this.suspendInterface();
  },
  suspendInterface: function () {
      document.getElementById("waitForProcessToFinish").style.display = ((!!Object.keys(this.suspendOrders).length) ? 'block' : 'none');
      document.getElementById("DOMWaitingDesc").innerHTML = "<ol><li>" + Object.values(this.suspendOrders).join("</li><li>") + "</li></ol>";
  }
};
let toolBarVue;
//let modelForVertex;
//let tempModel;
//let editModel;
/*used in other files
menuVue
footerVue
settingsVue
updateMathJax
kbshort
kbshortcut
setCookie
getCookie
blocksVue
blockOnDOM
setTermianls
*/