const lojas = [
  { 
    nome: "RIO SUL", 
    lat: -22.798465383728914, 
    lng: -43.644806268176616, 
    endereco: "Estr. Rio São Paulo, 1380 - Campo Lindo, Seropédica - RJ, 23890-000", 
    horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
    whatsapp: "5521996459381" 
  },
  { 
    nome: "RIO SUL", 
    lat: -22.74137499494114, 
    lng: -43.48521255254507, 
    endereco: "R. Tomás Fonseca, 500 - Comendador Soares, Nova Iguaçu - RJ, 26280-376", 
    horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
    whatsapp: "5521996459381" 
  },
  { 
    nome: "ADONAI", 
    lat: -22.846318250530064, 
    lng: -43.32485432192923, 
    endereco: "R. Cisplatina, 9 - 11 - Irajá, Rio de Janeiro - RJ, 21235-070",
    horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
    whatsapp: "5521996459381" 
  },
  {
    nome: "BALCÃO MENDANHA", 
    lat: -22.858360780252575, 
    lng: -43.541599754301764, 
    endereco: "Estr. do Mendanha, 4489 - Campo Grande, Rio de Janeiro - RJ, 23095-842",
    horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
    whatsapp: "5521996459381" 
  },
  {
  nome: "BALCÃO CIDADE DE DEUS", 
  lat: -22.945876912014718, 
  lng: -43.36200909725777, 
  endereco: "Estrada Marechal Miguel Salazar Mendes de Moraes, 1505 - Cidade de Deus, Rio de Janeiro - RJ, 22770-333",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "BALCÃO NOVA IGUAÇU", 
  lat: -22.762274063523122, 
  lng: -43.42681310339188, 
  endereco: "Av. Carlos Marques Rollo, 1055 - Vila Nova, Nova Iguaçu - RJ, 26225-290",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "BALCÃO CAXIAS", 
  lat: -22.792038109743192, 
  lng: -43.30925477009973, 
  endereco: "Av. Governador Leonel de Moura Brizola, 1041 - Centro, Duque de Caxias - RJ, 25010-007",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "BALCÃO CADEG", 
  lat: -22.894934250014558, 
  lng: -43.23401184104212, 
  endereco: "Rua Capitão Félix, 110 Pav 2 , Rua 6 , Lj 2 e 4 BLC L - Benfica, Rio de Janeiro - RJ, 20920-310",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "BALCÃO RIO SÃO PAULO", 
  lat: -22.885199292609364, 
  lng: -43.56916987650832, 
  endereco: "Estr. Rio São Paulo, 1700 - Campo Grande, Rio de Janeiro - RJ, 23087-005",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381"
},
{
  nome: "BALCÃO IRAJÁ 1", 
  lat: -22.827572525711158, 
  lng: -43.33898532029502, 
  endereco: "Avenida Brasil, 19001 - Pavilhão: 64 - Lojas: 22, 23, e 24 - Irajá, Rio de Janeiro - RJ, 21000-000",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "BALCÃO IRAJÁ 2", 
  lat: -22.832129382719444, 
  lng: -43.34167783558219, 
  endereco: "Estr. Pedro Borges de Freitas, 741 - pavilhão 74 - Colégio, Rio de Janeiro - RJ, 21235-390",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "MIRANDÃO AÇOUGUE E MERCEARIA", 
  lat: -22.892594260332718, 
  lng: -43.44369273147886, 
  endereco: "R. Miranda Varejão, 215 - Realengo, Rio de Janeiro - RJ, 21770-181",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "BAR DO ESCADINHA", 
  lat: -22.872302093189266, 
  lng: -43.47741501394025, 
  endereco: "R. do Magistrado, 92 - Bangu, Rio de Janeiro - RJ, 21842-420",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "BAR E LANCHONETE DOIS AMIGOS", 
  lat: -22.89400819143008, 
  lng: -43.23927407565709, 
  endereco: "R. Pref. Olímpio de Melo, 1910 - Benfica, Rio de Janeiro - RJ, 20930-005",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "BAR E MERCEARIA CORAÇÃO DE JESUS", 
  lat: -22.87608274428597, 
  lng: -43.2134101873354, 
  endereco: "Caju, Rio de Janeiro - RJ, 20931-040",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "BAR MANOEL LF", 
  lat: -22.855986714807056, 
  lng: -43.24733743332968, 
  endereco: "R. Teixeira Ribeiro, 513 - Bonsucesso",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "BOINA PRETA AÇUCARADA", 
  lat: -22.86621776140987, 
  lng: -43.41020768546225, 
  endereco: "Estr. São Pedro de Alcântara, 2856 - Magalhães Bastos, Rio de Janeiro - RJ, 21615-435",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "CAFÉ COM CHANTILLY PADARIA E CONFEITARIA", 
  lat: -22.956529848466737, 
  lng: -43.38305099064167, 
  endereco: "R. João Bruno Lobo, 148 - Curicica, Rio de Janeiro - RJ, 22780-805",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "CEREAIS E MERCERARIA 2010 DE SÃO JOSÉ", 
  lat: -22.74560623021261, 
  lng: -43.32817382509444, 
  endereco: "ESTRADA DO CALUNDU N 1715 ",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "CEREALISTA 90", 
  lat: -22.876082529415214, 
  lng: -43.48676586216453, 
  endereco: "R. Eugênio Paiva, 277 - Senador Camará, Rio de Janeiro - RJ, 21830-475",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "CHE LANCHONETE", 
  lat: -22.991885278126396, 
  lng: -43.25178043332456, 
  endereco: "Via Ápia da Rocinha, 43 - São Conrado, Rio de Janeiro - RJ, 22451-540",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "DELICIA DE CAMPO GRANDE COMERCIO DE DOCES", 
  lat: -22.903174719540655, 
  lng: -43.55846182972169, 
  endereco: "R. Viúva Dantas, 60 - Campo Grande, Rio de Janeiro - RJ, 23052-090",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "DEPOSITO DO BARÃO", 
  lat: -22.91946768456562, 
  lng: -43.21144148398267, 
  endereco: "R. Barão de Itapagipe, 108 - Rio Comprido, Rio de Janeiro - RJ, 20261-005",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "DISTRIBUIDORA RIO BEBIDAS ZONA OESTE", 
  lat: -22.891880867340053, 
  lng: -43.608934260314555, 
  endereco: "Estr. do Encanamento, 688 - Santa Margarida, Rio de Janeiro - RJ, 23068-225",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "DOÇURA DO LOTE QUINZE", 
  lat: -22.71428582855636, 
  lng: -43.326416289156654, 
  endereco: "Est. Manoel de Sá, 131 - Parque Martinho, Belford Roxo - RJ, 26183-460",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "DOWNTOWN COMERCIO DE DOCES", 
  lat: -23.004583664722315, 
  lng: -43.318374534596124, 
  endereco: "Av. das Américas, 500 - Barra da Tijuca, Rio de Janeiro - RJ, 22640-100",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "KUTTS BAR", 
  lat: -22.63169704455183, 
  lng: -43.70670124683099, 
  endereco: "R. Dep. Romeu Natal, 316 - Lages, Paracambi - RJ, 26600-000",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "HORT FRUTH VERDÃO", 
  lat: -22.902518401172976, 
  lng: -43.358663219834895, 
  endereco: "Estr. Cmte. Luís Souto, 126b - Tanque, Rio de Janeiro - RJ, 22733-040",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "MERCADINHO CARREGAL", 
  lat: -22.87741607573429, 
  lng: -43.45692388915075, 
  endereco: "R. Abaeté, 184 - Bangu, Rio de Janeiro - RJ, 21810-130",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "ADONAI", 
  lat: -22.85350051411253, 
  lng: -43.60253196895674, 
  endereco: "Alameda São Bernardo, 648 - Km 32, Nova Iguaçu - RJ, 26298-602",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "MERCADO CENTRAL SOUZA", 
  lat: -22.91552029918176, 
  lng: -43.63164320413605, 
  endereco: "Est. de Urucânia, 10 - Paciência, Rio de Janeiro - RJ, 23570-295",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "MERCADO CEU E MAR", 
  lat: -22.988437521744448, 
  lng: -43.248729523146416, 
  endereco: "Estr. da Gávea, 447 - Rocinha, Rio de Janeiro - RJ, 22451-262",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "MERCADO COSTA DO SOL", 
  lat: -22.876996154664518, 
  lng: -43.81798628730116, 
  endereco: "-439, R. Pedro Pacheco, 1 - Brisa Mar, Itaguaí - RJ",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "MERCADO MARACAJAS", 
  lat: -22.819722354012146, 
  lng: -43.23054141798852, 
  endereco: "Estr. de Maracajás, 635 - Galeão, Rio de Janeiro - RJ, 21941-395",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "MERCADO RG FREZ", 
  lat: -22.858875670870386, 
  lng: -43.6254301664734, 
  endereco: "R. Dez, 229 - Paciência, Rio de Janeiro - RJ, 23065-100",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "RIO SUL", 
  lat: -22.620063535877627, 
  lng: -43.20241713353413, 
  endereco: "Av. Coronel Sisson - Vila Araci, Duque de Caxias - RJ, 25255-030",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER REDE SALMOS REMI", 
  lat: -22.929072281414555, 
  lng: -43.392503293320274, 
  endereco: "Estr. do Outeiro Santo, 1139 - Jacarepaguá, Rio de Janeiro - RJ, 22713-169",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER COMPRAS", 
  lat: -22.947431261717327, 
  lng: -43.371898404135045, 
  endereco: "Estr. dos Bandeirantes, 2629 - Taquara, Rio de Janeiro - RJ, 22775-111",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER COMPRAS", 
  lat: -22.9185706594067, 
  lng: -43.62206646705746, 
  endereco: "QD LT, R. Rio Tinto, S/N - 19 - Paciência, Rio de Janeiro - RJ, 23587-180",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER COMPRAS", 
  lat: -22.91969476180853, 
  lng: -43.54429832431384, 
  endereco: "Estr. do Moinho, 18 - Campo Grande, Rio de Janeiro - RJ, 23040-550",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER REDE", 
  lat: -22.857367445500255, 
  lng: -43.49221368075154, 
  endereco: "40, Av. Etiópia, 34 - Bangu, Rio de Janeiro - RJ, 21852-010",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER REDE", 
  lat: -22.872116600660636, 
  lng: -43.45192745780478, 
  endereco: "R. Andorra, 29 - Padre Miguel, Rio de Janeiro - RJ, 21875-120",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "MERCADO TUDO NA MÃO", 
  lat: -22.708611490754272, 
  lng: -43.561877936536774, 
  endereco: "Av. Camarim, 65 - Vila do Tinguá, Queimados - RJ, 26383-140",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER REDE", 
  lat: -22.896519348199906, 
  lng: -43.54671827142375, 
  endereco: "Av. Cesário de Melo, 995 - Sen. Vasconcelos, Rio de Janeiro - RJ, 23085-110",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER COMPRAS", 
  lat: -22.88289329879169, 
  lng: -43.522180616203954, 
  endereco: "R. Macaé, 0 - Santa Cruz, Rio de Janeiro - RJ, 23510-170",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER COMPRAS", 
  lat: -22.721448879696847, 
  lng: -43.7320940959796, 
  endereco: "Estr. do Gado, 126 - Santa Sofia, Seropédica - RJ, 23895-685",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "AÇOUGUE E MERCEARIA DA FAMÍLIA", 
  lat: -22.963577500084153, 
  lng: -43.70632291748266, 
  endereco: "R. Landri Sáles, 149 - Sepetiba, Rio de Janeiro - RJ, 23545-070",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "MERCEARIA E RESTAURANTE COME BEM", 
  lat: -22.82788357505194, 
  lng: -43.59899444800631, 
  endereco: "Av. Abílio Augusto Távora, 24 - Jardim Paraíso, Nova Iguaçu - RJ, 26297-006",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "MERCEARIA R.A MARAVILHA", 
  lat: -22.956564304009333, 
  lng: -43.601802628492855, 
  endereco: "Av. Pilar do Sul, 850 - Guaratiba, Rio de Janeiro - RJ, 23033-160",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER COMPRAS", 
  lat: -22.881104894618062, 
  lng: -43.58882676840879, 
  endereco: "Estr. Carvalho Ramos, 5 - Campo Grande, Rio de Janeiro - RJ, 23073-540",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER REDE", 
  lat: -22.81604035546451, 
  lng: -43.42489467460629, 
  endereco: "R. Roldão Gonçalves, 1315 - Cabral, Nilópolis - RJ, 26520-542",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER REDE", 
  lat: -22.8850574576021, 
  lng: -43.57957158190006, 
  endereco: "Estr. Santa Maria, 1321 - Campo Grande, Rio de Janeiro - RJ, 23071-160",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "MERCEARIA VILAR NOVO", 
  lat: -22.75153422116003, 
  lng: -43.39543125139686, 
  endereco: "Av. Parque Várzea do Carmo, 96 - Santa Amélia, Belford Roxo - RJ, 26110-560",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "MERCADO DO RUI", 
  lat: -22.891837021848502, 
  lng: -43.48486059821193, 
  endereco: "R. Paulo Rola, 569 - Senador Camará, Rio de Janeiro - RJ, 21831-370",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER COMPRAS", 
  lat: -22.989053776568507, 
  lng: -43.32293130072047, 
  endereco: "Av. Eng. Souza Filho, 597 - Jacarepaguá, Rio de Janeiro - RJ, 22753-043",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "NEW POINT GRILL", 
  lat: -22.749283822939315, 
  lng: -43.40992514510771, 
  endereco: "Estr. Mineira, 268 - Areia Branca, Belford Roxo - RJ, 26112-340",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "PRATA MIX", 
  lat: -22.75777576835834, 
  lng: -43.42099790650192, 
  endereco: "R. de Vila Santo Antonio, 15 CEP 045 - Prata, Nova Iguaçu - RJ, 26010-340",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "PADARIA E CONFEITARIA CANCELA", 
  lat: -22.90024489403682, 
  lng: -43.22487068831291, 
  endereco: "R. São Luiz Gonzaga, 230 - São Cristóvão, Rio de Janeiro - RJ, 20910-060",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "PADARIA FORTALEZA", 
  lat: -22.939478261590313, 
  lng: -44.03663160693585, 
  endereco: "R. Fortaleza, 463-559 - Praia Do Saco, Mangaratiba - RJ, 23860-000",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "MERCADO QUALIMAX", 
  lat: -22.914437955941498, 
  lng: -43.20514671859694, 
  endereco: "R. Maia de Lacerda, n 14 - loja A - Estácio, Rio de Janeiro - RJ, 20250-000",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "PADARIA PARAISO VERDE", 
  lat: -22.744767812005232, 
  lng: -43.696298598441146, 
  endereco: "R. José Tunula, 38 - Boa Esperança, Seropédica - RJ, 23894-418",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "PADARIA PÃO GOSTOSO", 
  lat: -22.91955111751524, 
  lng: -43.373155890757026, 
  endereco: "R. Atituba, 05 - Loja E - Taquara, Rio de Janeiro - RJ, 22730-170",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "CHURRASCO DO CHINA", 
  lat: -22.8695768446148, 
  lng: -43.35558433992224, 
  endereco: "Estr. Henrique de Melo, 373 - Bento Ribeiro, Rio de Janeiro - RJ, 21340-190",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "PANIFICAÇÃO MAGALI", 
  lat: -22.892249184144642, 
  lng: -43.56588780403083, 
  endereco: "R. Vítor Alves, 1169 - Campo Grande, Rio de Janeiro - RJ, 23080-181",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "BOM DESCONTO", 
  lat: -22.830594884421572, 
  lng: -43.2905507920992, 
  endereco: "Av. Antenor Navarro, 126 - Brás de Pina, Rio de Janeiro - RJ, 21012-250",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "BOM DESCONTO", 
  lat: -22.807756169252645, 
  lng: -43.3073134245768, 
  endereco: "R. Valentim Magalhães, 242-448 - Vigário Geral, Rio de Janeiro - RJ, 21241-330",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "RESTAURANTE DA PENELOPE", 
  lat: -22.871060689738684, 
  lng: -43.34073277135686, 
  endereco: "R. Soares Caldeira, 66 - Madureira, Rio de Janeiro - RJ, 21351-080",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "RIO SUL", 
  lat: -22.840741071172157, 
  lng: -43.399191956808664, 
  endereco: "Estr. Mal. Alencastro, 2001 - Ricardo de Albuquerque, Rio de Janeiro - RJ, 21615-320",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "RJ CINCO SUPERMERCADO", 
  lat: -22.879570955294692, 
  lng: -43.510939373447755, 
  endereco: "R. Dr. Clemente Marques, 2 - Santíssimo, Rio de Janeiro - RJ, 23010-150",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER REDE", 
  lat: -22.910918528169912, 
  lng: -43.55906360013035, 
  endereco: "R. Catiara, 70 - Campo Grande, Rio de Janeiro - RJ, 23045-140",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "MULTI MARKET", 
  lat: -22.89729659396408, 
  lng: -43.57978273653952, 
  endereco: "R. Nova Era, 230 - Campo Grande, Rio de Janeiro - RJ, 23070-300",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "RIO SUL", 
  lat: -22.79967471326323, 
  lng: -43.42187138900107, 
  endereco: "Av. Getúlio de Moura, 2605 - Centro, Nilópolis - RJ, 26510-000",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER REDE", 
  lat: -22.98170857596089, 
  lng: -43.69149169158695, 
  endereco: "Estr. São Tarcísio, 492 - Sepetiba, Rio de Janeiro - RJ, 23530-827",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPERMERCADO SEROPÉDICA", 
  lat: -22.74534281352813, 
  lng: -43.701812365267834, 
  endereco: "R. Tharsis e Paula, 1-11 - 1-11 - Fazenda Caxias, Seropédica - RJ, 23890-000",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "ADONAI", 
  lat: -22.89107302515495, 
  lng: -43.60853462319328, 
  endereco: "Estr. do Encanamento, 781 - Cosmos, Rio de Janeiro - RJ, 23060-000",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "ADONAI", 
  lat: -22.982177693856364, 
  lng: -43.468510914572526, 
  endereco: "Estr. dos Bandeirantes, 20074 - Vargem Pequena, Rio de Janeiro - RJ, 22783-550",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "LANCHONETE E PASTELARIA CHEN", 
  lat: -22.7564182930434, 
  lng: -43.37287606855971, 
  endereco: "Estr. Belford Roxo, 552 - Bom Pastor, Belford Roxo - RJ, 26110-260",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "TUDODIBOM PADARIA E RESTAURANTE", 
  lat: -22.696645556063988, 
  lng: -44.002323268229766, 
  endereco: "Estr. de São João Marcos, 115 - Passa Três, Rio Claro - RJ, 27460-000",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
{
  nome: "SUPER REDE", 
  lat: -22.896476009244523, 
  lng: -43.49235989050208, 
  endereco: "R. Pte. Alta, 2 - Senador Camará, Rio de Janeiro - RJ, 21832-290",
  horario: { segSex: { start: 7, end: 18 }, sabado: { start: 7, end: 18 }, domingo: { start: 0, end: 0 } },
  whatsapp: "5521996459381" 
},
];


function calculateDistance(lat1, lng1, lat2, lng2) {
  const toRadians = (degrees) => degrees * (Math.PI / 180);
  const R = 6371; 
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}


function verificarHorario(loja) {
  const now = new Date();
  const day = now.getDay(); 
  const hour = now.getHours();
  let status = "Fechado";

  if (day >= 1 && day <= 5) { 
    if (loja.horario.segSex.start !== 0 && loja.horario.segSex.end !== 0 &&
        hour >= loja.horario.segSex.start && hour < loja.horario.segSex.end) {
      status = "Aberto";
    }
  } else if (day === 6) { 
    if (loja.horario.sabado.start !== 0 && loja.horario.sabado.end !== 0 &&
        hour >= loja.horario.sabado.start && hour < loja.horario.sabado.end) {
      status = "Aberto";
    }
  } else { 
    if (loja.horario.domingo.start !== 0 && loja.horario.domingo.end !== 0 &&
        hour >= loja.horario.domingo.start && hour < loja.horario.domingo.end) {
      status = "Aberto";
    }
  }
  return status;
}


document.getElementById("locationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedRegion = document.getElementById("region").value;

  if (!selectedRegion) {
    alert("Selecione um bairro.");
    return;
  }

  const [userLat, userLng] = selectedRegion.split(",").map(Number);

  const resultsDiv = document.getElementById("results");

  
  const distances = lojas.map(loja => ({
    nome: loja.nome,
    endereco: loja.endereco,
    distancia: calculateDistance(userLat, userLng, loja.lat, loja.lng),
    lat: loja.lat,
    lng: loja.lng,
    status: verificarHorario(loja),
    whatsapp: loja.whatsapp
  })).filter(loja => loja.distancia <= 10); 

  distances.sort((a, b) => a.distancia - b.distancia);

  if (distances.length > 0) {
    resultsDiv.innerHTML = "<h2>Lojas mais próximas:</h2>" +
      distances.map(loja => `
        <div>
          <p><strong>${loja.nome}</strong></p>
          <p>${loja.endereco}</p>
          <p>Distância: ${loja.distancia.toFixed(2)} km</p>
          <p style="color: ${loja.status === 'Aberto' ? 'green' : 'red'};">
            <i class="fas fa-clock"></i> ${loja.status}
          </p>
          <a href="https://www.google.com/maps?q=${loja.lat},${loja.lng}" target="_blank">
            <button class="directions-button">Como Chegar</button>
          </a>
          <a href="https://wa.me/${loja.whatsapp}?text=Olá, gostaria de saber mais sobre o TRON ${loja.nome}" target="_blank">
            <button class="whatsapp-button">
              <i class="fa fa-whatsapp" style="margin-right: 5px; color: #25D366;"></i>
              WhatsApp
            </button>
          </a>
        </div>
      `).join("");
  } else {
    resultsDiv.innerHTML = "<h2>Poxa! Ainda não temos TRON próximo a sua localização.</h2>";
  }
});