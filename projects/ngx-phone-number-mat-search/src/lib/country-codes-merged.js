//import { Country } from "./country.model";

const LOCALES = {
  en: {
    ax: 'AALAND ISLANDS',
    af: 'AFGHANISTAN',
    al: 'ALBANIA',
    dz: 'ALGERIA',
    as: 'AMERICAN SAMOA',
    ad: 'ANDORRA',
    ao: 'ANGOLA',
    ai: 'ANGUILLA',
    aq: 'ANTARCTICA',
    ag: 'ANTIGUA AND BARBUDA',
    ar: 'ARGENTINA',
    am: 'ARMENIA',
    aw: 'ARUBA',
    au: 'AUSTRALIA',
    at: 'AUSTRIA',
    az: 'AZERBAIJAN',
    bs: 'BAHAMAS',
    bh: 'BAHRAIN',
    bd: 'BANGLADESH',
    bb: 'BARBADOS',
    by: 'BELARUS',
    be: 'BELGIUM',
    bz: 'BELIZE',
    bj: 'BENIN',
    bm: 'BERMUDA',
    bt: 'BHUTAN',
    bo: 'BOLIVIA',
    ba: 'BOSNIA AND HERZEGOWINA',
    bw: 'BOTSWANA',
    bv: 'BOUVET ISLAND',
    br: 'BRAZIL',
    io: 'BRITISH INDIAN OCEAN TERRITORY',
    bn: 'BRUNEI DARUSSALAM',
    bg: 'BULGARIA',
    bf: 'BURKINA FASO',
    bi: 'BURUNDI',
    bq: 'CARIBBEAN NETHERLANDS',
    kh: 'CAMBODIA',
    cm: 'CAMEROON',
    ca: 'CANADA',
    cv: 'CAPE VERDE',
    ky: 'CAYMAN ISLANDS',
    cf: 'CENTRAL AFRICAN REPUBLIC',
    td: 'CHAD',
    cl: 'CHILE',
    cn: 'CHINA',
    cc: 'COCOS ISLANDS',
    co: 'COLOMBIA',
    km: 'COMOROS',
    cd: 'CONGO',
    cg: 'CONGO REPUBLIC',
    ck: 'COOK ISLANDS',
    cr: 'COSTA RICA',
    ci: 'COTE DIVOIRE',
    hr: 'CROATIA ',
    cu: 'CUBA',
    cw: 'CURACAO',
    cy: 'CYPRUS',
    cz: 'CZECH REPUBLIC',
    dk: 'DENMARK',
    dj: 'DJIBOUTI',
    dm: 'DOMINICA',
    do: 'DOMINICAN REPUBLIC',
    ec: 'ECUADOR',
    eg: 'EGYPT',
    sv: 'EL SALVADOR',
    gq: 'EQUATORIAL GUINEA',
    er: 'ERITREA',
    ee: 'ESTONIA',
    et: 'ETHIOPIA',
    fk: 'FALKLAND ISLANDS (MALVINAS)',
    fo: 'FAROE ISLANDS',
    fj: 'FIJI',
    fi: 'FINLAND',
    fr: 'FRANCE',
    gf: 'FRENCH GUIANA',
    pf: 'FRENCH POLYNESIA',
    tf: 'FRENCH SOUTHERN TERRITORIES',
    ga: 'GABON',
    gm: 'GAMBIA',
    ge: 'GEORGIA',
    de: 'GERMANY',
    gh: 'GHANA',
    gi: 'GIBRALTAR',
    gr: 'GREECE',
    gl: 'GREENLAND',
    gd: 'GRENADA',
    gp: 'GUADELOUPE',
    gu: 'GUAM',
    gt: 'GUATEMALA',
    gg: 'GUERNSEY',
    gn: 'GUINEA',
    gw: 'GUINEA-BISSAU',
    gy: 'GUYANA',
    ht: 'HAITI',
    hm: 'HEARD AND MC DONALD ISLANDS',
    hn: 'HONDURAS',
    hk: 'HONG KONG',
    hu: 'HUNGARY',
    is: 'ICELAND',
    in: 'INDIA',
    id: 'INDONESIA',
    ir: 'IRAN ',
    iq: 'IRAQ',
    ie: 'IRELAND',
    im: 'ISLA DE MAN',
    il: 'ISRAEL',
    it: 'ITALY',
    jm: 'JAMAICA',
    jp: 'JAPAN',
    je: 'JERSEY',
    jo: 'JORDAN',
    kz: 'KAZAKHSTAN',
    ke: 'KENYA',
    ki: 'KIRIBATI',
    kp: 'KOREA NORTH ',
    kr: 'KOREA SOUTH',
    xk: 'KOSOVO',
    kw: 'KUWAIT',
    kg: 'KYRGYZSTAN',
    la: 'LAO',
    lv: 'LATVIA',
    lb: 'LEBANON',
    ls: 'LESOTHO',
    lr: 'LIBERIA',
    ly: 'LIBYAN ARAB JAMAHIRIYA',
    li: 'LIECHTENSTEIN',
    lt: 'LITHUANIA',
    lu: 'LUXEMBOURG',
    mo: 'MACAU',
    mk: 'MACEDONIA',
    mg: 'MADAGASCAR',
    mw: 'MALAWI',
    my: 'MALAYSIA',
    mv: 'MALDIVES',
    ml: 'MALI',
    mt: 'MALTA',
    mh: 'MARSHALL ISLANDS',
    mq: 'MARTINIQUE',
    mr: 'MAURITANIA',
    mu: 'MAURITIUS',
    yt: 'MAYOTTE',
    mx: 'MEXICO',
    fm: 'MICRONESIA',
    md: 'MOLDOVA',
    mc: 'MONACO',
    mn: 'MONGOLIA',
    me: 'MONTENEGRO',
    ms: 'MONTSERRAT',
    ma: 'MOROCCO',
    mz: 'MOZAMBIQUE',
    mm: 'MYANMAR',
    na: 'NAMIBIA',
    nr: 'NAURU',
    np: 'NEPAL',
    nl: 'NETHERLANDS',
    an: 'NETHERLANDS ANTILLES',
    nc: 'NEW CALEDONIA',
    nz: 'NEW ZEALAND',
    ni: 'NICARAGUA',
    ne: 'NIGER',
    ng: 'NIGERIA',
    nu: 'NIUE',
    nf: 'NORFOLK ISLAND',
    mp: 'NORTHERN MARIANA ISLANDS',
    no: 'NORWAY',
    om: 'OMAN',
    pk: 'PAKISTAN',
    pw: 'PALAU',
    ps: 'PALESTINA',
    pa: 'PANAMA',
    pg: 'PAPUA NEW GUINEA',
    py: 'PARAGUAY',
    pe: 'PERU',
    ph: 'PHILIPPINES',
    pn: 'PITCAIRN',
    pl: 'POLAND',
    pt: 'PORTUGAL',
    pr: 'PUERTO RICO',
    qa: 'QATAR',
    re: 'REUNION',
    ro: 'ROMANIA',
    ru: 'RUSSIAN FEDERATION',
    rw: 'RWANDA',
    sh: 'SAINT HELENA',
    kn: 'SAINT KITTS AND NEVIS',
    lc: 'SAINT LUCIA',
    pm: 'SAINT PIERRE AND MIQUELON',
    vc: 'SAINT VINCENT AND THE GRENADINES',
    ws: 'SAMOA',
    bl: 'SAN BARTOLOMÉ',
    sm: 'SAN MARINO',
    st: 'SAO TOME AND PRINCIPE',
    sa: 'SAUDI ARABIA',
    sn: 'SENEGAL',
    cs: 'SERBIA AND MONTENEGRO',
    rs: 'SERBIA',
    sc: 'SEYCHELLES',
    sl: 'SIERRA LEONE',
    sg: 'SINGAPORE',
    sx: 'SINT MAARTEN',
    sk: 'SLOVAKIA',
    si: 'SLOVENIA',
    sb: 'SOLOMON ISLANDS',
    so: 'SOMALIA',
    za: 'SOUTH AFRICA',
    gs: 'SOUTH GEORGIA ISLANDS',
    es: 'SPAIN',
    lk: 'SRI LANKA',
    sd: 'SUDAN',
    ss: 'SOUTH SUDAN',
    sr: 'SURINAME',
    sj: 'SVALBARD AND JAN MAYEN ISLANDS',
    sz: 'SWAZILAND',
    se: 'SWEDEN',
    ch: 'SWITZERLAND',
    sy: 'SYRIAN ARAB REPUBLIC',
    tw: 'TAIWAN',
    tj: 'TAJIKISTAN',
    tz: 'TANZANIA',
    th: 'THAILAND',
    tl: 'TIMOR-LESTE',
    tg: 'TOGO',
    tk: 'TOKELAU',
    to: 'TONGA',
    tt: 'TRINIDAD AND TOBAGO',
    tn: 'TUNISIA',
    tr: 'TURKEY',
    tm: 'TURKMENISTAN',
    tc: 'TURKS AND CAICOS ISLANDS',
    tv: 'TUVALU',
    ug: 'UGANDA',
    ua: 'UKRAINE',
    ae: 'UNITED ARAB EMIRATES',
    gb: 'UNITED KINGDOM',
    us: 'UNITED STATES',
    um: 'UNITED STATES MINOR OUTLYING ISLANDS',
    uy: 'URUGUAY',
    uz: 'UZBEKISTAN',
    vu: 'VANUATU',
    va: 'VATICAN CITY STATE',
    ve: 'VENEZUELA',
    vn: 'VIET NAM',
    vg: 'VIRGIN ISLANDS (BRITISH)',
    vi: 'VIRGIN ISLANDS (U.S.)',
    wf: 'WALLIS AND FUTUNA ISLANDS',
    eh: 'WESTERN SAHARA',
    ye: 'YEMEN',
    zm: 'ZAMBIA',
    zw: 'ZIMBABWE '
  },
  es: {
    ax: 'ISLAS ÁLAND',
    af: 'AFGHANISTÁN',
    al: 'ALBANIA',
    dz: 'ARGEL',
    as: 'SAMOA AMERICANA',
    ad: 'ANDORRA',
    ao: 'ANGOLA',
    ai: 'ANGUILA',
    aq: 'ANTÁRTIDA',
    ag: 'ANTIGUA Y BARBUDA',
    ar: 'ARGENTINA',
    am: 'ARMENIA',
    aw: 'ARUBA',
    au: 'AUSTRALIA',
    at: 'AUSTRIA',
    az: 'AZERBAIYÁN',
    bs: 'BAHAMAS',
    bh: 'BAHRÉIN',
    bd: 'BANGLADESH',
    bb: 'BARBADOS',
    by: 'BELARÚS',
    be: 'BÉLGICA',
    bz: 'BELICE',
    bj: 'BENIN',
    bm: 'BERMUDAAS',
    bt: 'BHUTÁN',
    bo: 'BOLIVIA',
    ba: 'BOSNIA Y HERZEGOVINA',
    bw: 'BOTSUANA',
    bv: 'ISLA BOUVET',
    br: 'BRASIL',
    io: 'TERRITORIO BRITÁNICO DEL OCÉANO ÍNDICO',
    bn: 'BRUNÉI',
    bg: 'BULGARIA',
    bf: 'BURKINA FASO',
    bi: 'BURUNDI',
    bq: 'CARIBE PAÍSES BAJOS',
    kh: 'CAMBOYA',
    cm: 'CAMERÚN',
    ca: 'CANADÁ',
    cv: 'CABO VERDE',
    ky: 'ISLAS CAIMÁN',
    cf: 'REPÚBLICA CENTRO-AFRICANA',
    td: 'CHAD',
    cl: 'CHILE',
    cn: 'CHINA',
    cc: 'ISLAS COCOS',
    co: 'COLOMBIA',
    km: 'COMOROS',
    cd: 'CONGO (ZAIRE)',
    cg: 'CONGO',
    ck: 'ISLAS COOK',
    cr: 'COSTA RICA',
    ci: 'COSTA DE MARFIL',
    hr: 'CROACIA ',
    cu: 'CUBA',
    cw: 'CURAÇAO',
    cy: 'CHIPRE',
    cz: 'REPÚBLICA CHECA',
    dk: 'DINAMARCA',
    dj: 'YIBUTI',
    dm: 'DOMÍNICA',
    do: 'REPÚBLICA DOMINICANA',
    ec: 'ECUADOR',
    eg: 'EGIPTO',
    sv: 'EL SALVADOR',
    gq: 'GUINEA ECUATORIAL',
    er: 'ERITREA',
    ee: 'ESTONIA',
    et: 'ETIOPÍA',
    fk: 'ISLAS MALVINAS',
    fo: 'ISLAS FAROE',
    fj: 'FIJI',
    fi: 'FINLANDIA',
    fr: 'FRANCIA',
    gf: 'GUIANA FRANCESA',
    pf: 'POLYNESIA FRANCESA',
    tf: 'TERRITORIOS AUSTRALES FRANCESES',
    ga: 'GABÓN',
    gm: 'GAMBIA',
    ge: 'GEORGIA',
    de: 'ALEMANIA',
    gh: 'GHANA',
    gi: 'GIBRALTAR',
    gr: 'GREECE',
    gl: 'GROENLANDIA',
    gd: 'GRANADA',
    gp: 'GUADALUPE',
    gu: 'GUAM',
    gt: 'GUATEMALA',
    gg: 'GUERNSEY',
    gn: 'GUINEA',
    gw: 'GUINEA-BISSAU',
    gy: 'GUYANA',
    ht: 'HAITI',
    hm: 'ISLAS HEARD Y MC DONALD',
    hn: 'HONDURAS',
    hk: 'HONG KONG',
    hu: 'HUNGRÍA',
    is: 'ISLANDIA',
    in: 'INDIA',
    id: 'INDONESIA',
    ir: 'IRÁN',
    iq: 'IRAK',
    ie: 'IRLANDA',
    im: 'ISLA DE MAN',
    il: 'ISRAEL',
    it: 'ITALIA',
    jm: 'JAMAICA',
    jp: 'JAPÓN',
    je: 'JERSEY',
    jo: 'JORDANIA',
    kz: 'KAZAJSTÁN',
    ke: 'KENIA',
    ki: 'KIRIBATI',
    kp: 'KOREA DEL NORTE',
    kr: 'KOREA DEL SUR',
    xk: 'KOSOVO',
    kw: 'KUWAIT',
    kg: 'KIRGUISTÁN',
    la: 'LAOS',
    lv: 'LETONIA',
    lb: 'LÍBANO',
    ls: 'LESOTHO',
    lr: 'LIBERIA',
    ly: 'LIBIA',
    li: 'LIECHTENSTEIN',
    lt: 'LITUANIA',
    lu: 'LUXEMBURGO',
    mo: 'MACAO',
    mk: 'MACEDONIA',
    mg: 'MADAGASCAR',
    mw: 'MALAWI',
    my: 'MALASIA',
    mv: 'MALDIVAS',
    ml: 'MALI',
    mt: 'MALTA',
    mh: 'ISLAS MARSHALL',
    mq: 'MATINICA',
    mr: 'MAURITANIA',
    mu: 'MAURICIO',
    yt: 'MAYOTTE',
    mx: 'MÉXICO',
    fm: 'MICRONESIA',
    md: 'MOLDOVA',
    mc: 'MÓNACO',
    mn: 'MONGOLIA',
    me: 'MONTENEGRO',
    ms: 'MONTSERRAT',
    ma: 'MARRUECOS',
    mz: 'MOZAMBIQUE',
    mm: 'MYANMAR',
    na: 'NAMIBIA',
    nr: 'NAURU',
    np: 'NEPAL',
    nl: 'PAÍSES BAJOS',
    an: 'ANTILLAS NEERLANDESAS',
    nc: 'NUEVA CALEDONIA',
    nz: 'NUEVA ZELANDA',
    ni: 'NICARAGUA',
    ne: 'NÍGER',
    ng: 'NIGERIA',
    nu: 'NIUE',
    nf: 'ISLAS NORKFOLK',
    mp: 'ISLAS MARIANAS DEL NORTE',
    no: 'NORUEGA',
    om: 'OMÁN',
    pk: 'PAKISTÁN',
    pw: 'ISLAS PALAOS',
    ps: 'PALESTINA',
    pa: 'PANAMÁ',
    pg: 'PAPÚA NUEVA GUINEA',
    py: 'PARAGUAY',
    pe: 'PERÚ',
    ph: 'FILIPINAS',
    pn: 'ISLAS PITCAIRN',
    pl: 'POLONIA',
    pt: 'PORTUGAL',
    pr: 'PUERTO RICO',
    qa: 'QATAR',
    re: 'REUNIÓN',
    ro: 'RUMANÍA',
    ru: 'RUSIA',
    rw: 'RUANDA',
    sh: 'SANTA ELENA',
    kn: 'SAN CRISTÓBAL Y NIEVES',
    lc: 'SANTA LUCÍA',
    pm: 'SAN PEDRO Y MIQUELÓN',
    vc: 'SAN VICENTE Y LAS GRANADINAS',
    ws: 'SAMOA',
    bl: 'SAN BARTOLOMÉ',
    sm: 'SAN MARINO',
    st: 'SANTO TOMÉ Y PRÍNCIPE',
    sa: 'ARABIA SAUDITA',
    sn: 'SENEGAL',
    cs: 'SERBIA Y MONTENEGRO',
    rs: 'SERBIA',
    sc: 'SEYCHELLES',
    sl: 'SIERRA LEONA',
    sg: 'SINGAPUR',
    sx: 'SINT MAARTEN',
    sk: 'ESLOVAQUIA',
    si: 'ESLOVENIA',
    sb: 'ISLAS SOLOMÓN',
    so: 'SOMALIA',
    za: 'SUDÁFRICA',
    gs: 'GEORGIA DEL SUR E ISLAS SANDWICH DEL SUR',
    es: 'ESPAÑA',
    lk: 'SRI LANKA',
    sd: 'SUDÁN',
    ss: 'SUDÁN DEL SUR',
    sr: 'SURINAM',
    sj: 'ISLAS SVALBARD Y JAN MAYEN',
    sz: 'SUAZILANDIA',
    se: 'SUECIA',
    ch: 'SUIZA',
    sy: 'SIRIA',
    tw: 'TAIWÁN',
    tj: 'TAYIKISTÁN',
    tz: 'TANZANIA',
    th: 'TAILANDIA',
    tl: 'TIMOR-LESTE',
    tg: 'TOGO',
    tk: 'TOKELAU',
    to: 'TONGA',
    tt: 'TRINIDAD Y TOBAGO',
    tn: 'TÚNEZ',
    tr: 'TURQUÍA',
    tm: 'TURKMENISTÁN',
    tc: 'ISLAS TURCAS Y CAICOS',
    tv: 'TUVALU',
    ug: 'UGANDA',
    ua: 'UCRANIA',
    ae: 'EMIRATOS ÁRABES UNIDOS',
    gb: 'REINO UNIDO',
    us: 'ESTADOS UNIDOS DE AMÉRICA',
    um: 'ESTADOS UNIDOS ISLAS MINOR OUTLYING',
    uy: 'URUGUAY',
    uz: 'UZBEKISTÁN',
    vu: 'VANUATU',
    va: 'CIUDAD DEL VATICANO',
    ve: 'VENEZUELA',
    vn: 'VIETNAM',
    vg: 'ISLAS VÍRGENES (INGLESAS)',
    vi: 'ISLAS VÍRGENES (U.S.)',
    wf: 'WALLIS Y FUTUNA',
    eh: 'SAHARA OCCIDENTAL',
    ye: 'YEMEN',
    zm: 'ZAMBIA',
    zw: 'ZIMBABUE '
  }
};


  let countries;



  /**
   * Returns the countries
   */
  function getCountries(){
    if (!countries || countries.length === 0) {
      countries = loadCountries();
    }
    return countries;
  }

  /**
   * Returns the countries by iso code
   */
  function getCountriesByISO(listOfIso){
    if (!countries || countries.length === 0) {
      countries = loadCountries();
    }

    if (listOfIso) {
      let countries = [];
      for (let iso of listOfIso) {
        let countryObj = countries.find(o => o.countryCode.toLowerCase() === iso.toLowerCase());
        if (countryObj) {
          countries.push(countryObj);
        }
      }
      return countries;
    } else {
      return countries;
    }
  }

  /**
   * Load and returns the countries
   */
  function loadCountries(locale = 'en'){
    let countriesZ = [
      {
        name: '',
        dialCode: '61',
        countryCode: 'au'
      },
      {
        name: '',
        dialCode: '994',
        countryCode: 'az'
      },
      {
        name: '',
        dialCode: '1242',
        countryCode: 'bs'
      },
      {
        name: '',
        dialCode: '973',
        countryCode: 'bh'
      },
      {
        name: '',
        dialCode: '880',
        countryCode: 'bd'
      },
      {
        name: '',
        dialCode: '1246',
        countryCode: 'bb'
      },
      {
        name: '',
        dialCode: '375',
        countryCode: 'by'
      },
      {
        name: '',
        dialCode: '32',
        countryCode: 'be'
      },
      {
        name: '',
        dialCode: '501',
        countryCode: 'bz'
      },
      {
        name: '',
        dialCode: '229',
        countryCode: 'bj'
      },
      {
        name: '',
        dialCode: '1441',
        countryCode: 'bm'
      },
      {
        name: '',
        dialCode: '975',
        countryCode: 'bt'
      },
      {
        name: '',
        dialCode: '591',
        countryCode: 'bo'
      },
      {
        name: '',
        dialCode: '387',
        countryCode: 'ba'
      },
      {
        name: '',
        dialCode: '267',
        countryCode: 'bw'
      },
      {
        name: '',
        dialCode: '55',
        countryCode: 'br'
      },
      {
        name: '',
        dialCode: '246',
        countryCode: 'io'
      },
      {
        name: '',
        dialCode: '1284',
        countryCode: 'vg'
      },
      {
        name: '',
        dialCode: '673',
        countryCode: 'bn'
      },
      {
        name: '',
        dialCode: '359',
        countryCode: 'bg'
      },
      {
        name: '',
        dialCode: '226',
        countryCode: 'bf'
      },
      {
        name: '',
        dialCode: '257',
        countryCode: 'bi'
      },
      {
        name: '',
        dialCode: '855',
        countryCode: 'kh'
      },
      {
        name: '',
        dialCode: '237',
        countryCode: 'cm'
      },
      {
        name: '',
        dialCode: '1',
        countryCode: 'ca'
      },
      {
        name: '',
        dialCode: '238',
        countryCode: 'cv'
      },
      {
        name: '',
        dialCode: '599',
        countryCode: 'bq'
      },
      {
        name: '',
        dialCode: '1345',
        countryCode: 'ky'
      },
      {
        name: '',
        dialCode: '236',
        countryCode: 'cf'
      },
      {
        name: '',
        dialCode: '235',
        countryCode: 'td'
      },
      {
        name: '',
        dialCode: '56',
        countryCode: 'cl'
      },
      {
        name: '',
        dialCode: '86',
        countryCode: 'cn'
      },
      {
        name: '',
        dialCode: '57',
        countryCode: 'co'
      },
      {
        name: '',
        dialCode: '269',
        countryCode: 'km'
      },
      {
        name: '',
        dialCode: '243',
        countryCode: 'cd'
      },
      {
        name: '',
        dialCode: '242',
        countryCode: 'cg'
      },
      {
        name: '',
        dialCode: '682',
        countryCode: 'ck'
      },
      {
        name: '',
        dialCode: '506',
        countryCode: 'cr'
      },
      {
        name: '',
        dialCode: '225',
        countryCode: 'ci'
      },
      {
        name: '',
        dialCode: '385',
        countryCode: 'hr'
      },
      {
        name: '',
        dialCode: '53',
        countryCode: 'cu'
      },
      {
        name: '',
        dialCode: '599',
        countryCode: 'cw'
      },
      {
        name: '',
        dialCode: '357',
        countryCode: 'cy'
      },
      {
        name: '',
        dialCode: '420',
        countryCode: 'cz'
      },
      {
        name: '',
        dialCode: '45',
        countryCode: 'dk'
      },
      {
        name: '',
        dialCode: '253',
        countryCode: 'dj'
      },
      {
        name: '',
        dialCode: '1767',
        countryCode: 'dm'
      },
      {
        name: '',
        dialCode: '1',
        countryCode: 'do'
      },
      {
        name: '',
        dialCode: '593',
        countryCode: 'ec'
      },
      {
        name: '',
        dialCode: '20',
        countryCode: 'eg'
      },
      {
        name: '',
        dialCode: '503',
        countryCode: 'sv'
      },
      {
        name: '',
        dialCode: '240',
        countryCode: 'gq'
      },
      {
        name: '',
        dialCode: '291',
        countryCode: 'er'
      },
      {
        name: '',
        dialCode: '372',
        countryCode: 'ee'
      },
      {
        name: '',
        dialCode: '251',
        countryCode: 'et'
      },
      {
        name: '',
        dialCode: '500',
        countryCode: 'fk'
      },
      {
        name: '',
        dialCode: '298',
        countryCode: 'fo'
      },
      {
        name: '',
        dialCode: '679',
        countryCode: 'fj'
      },
      {
        name: '',
        dialCode: '358',
        countryCode: 'fi'
      },
      {
        name: '',
        dialCode: '33',
        countryCode: 'fr'
      },
      {
        name: '',
        dialCode: '594',
        countryCode: 'gf'
      },
      {
        name: '',
        dialCode: '689',
        countryCode: 'pf'
      },
      {
        name: '',
        dialCode: '241',
        countryCode: 'ga'
      },
      {
        name: '',
        dialCode: '220',
        countryCode: 'gm'
      },
      {
        name: '',
        dialCode: '995',
        countryCode: 'ge'
      },
      {
        name: '',
        dialCode: '49',
        countryCode: 'de'
      },
      {
        name: '',
        dialCode: '233',
        countryCode: 'gh'
      },
      {
        name: '',
        dialCode: '350',
        countryCode: 'gi'
      },
      {
        name: '',
        dialCode: '30',
        countryCode: 'gr'
      },
      {
        name: '',
        dialCode: '299',
        countryCode: 'gl'
      },
      {
        name: '',
        dialCode: '1473',
        countryCode: 'gd'
      },
      {
        name: '',
        dialCode: '590',
        countryCode: 'gp'
      },
      {
        name: '',
        dialCode: '1671',
        countryCode: 'gu'
      },
      {
        name: '',
        dialCode: '502',
        countryCode: 'gt'
      },
      {
        name: '',
        dialCode: '44',
        countryCode: 'gg'
      },
      {
        name: '',
        dialCode: '224',
        countryCode: 'gn'
      },
      {
        name: '',
        dialCode: '245',
        countryCode: 'gw'
      },
      {
        name: '',
        dialCode: '592',
        countryCode: 'gy'
      },
      {
        name: '',
        dialCode: '509',
        countryCode: 'ht'
      },
      {
        name: '',
        dialCode: '504',
        countryCode: 'hn'
      },
      {
        name: '',
        dialCode: '852',
        countryCode: 'hk'
      },
      {
        name: '',
        dialCode: '36',
        countryCode: 'hu'
      },
      {
        name: '',
        dialCode: '354',
        countryCode: 'is'
      },
      {
        name: '',
        dialCode: '91',
        countryCode: 'in'
      },
      {
        name: '',
        dialCode: '62',
        countryCode: 'id'
      },
      {
        name: '',
        dialCode: '98',
        countryCode: 'ir'
      },
      {
        name: '',
        dialCode: '964',
        countryCode: 'iq'
      },
      {
        name: '',
        dialCode: '353',
        countryCode: 'ie'
      },
      {
        name: '',
        dialCode: '44',
        countryCode: 'im'
      },
      {
        name: '',
        dialCode: '972',
        countryCode: 'il'
      },
      {
        name: '',
        dialCode: '39',
        countryCode: 'it'
      },
      {
        name: '',
        dialCode: '1876',
        countryCode: 'jm'
      },
      {
        name: '',
        dialCode: '81',
        countryCode: 'jp'
      },
      {
        name: '',
        dialCode: '44',
        countryCode: 'je'
      },
      {
        name: '',
        dialCode: '962',
        countryCode: 'jo'
      },
      {
        name: '',
        dialCode: '7',
        countryCode: 'kz'
      },
      {
        name: '',
        dialCode: '254',
        countryCode: 'ke'
      },
      {
        name: '',
        dialCode: '686',
        countryCode: 'ki'
      },
      {
        name: '',
        dialCode: '383',
        countryCode: 'xk'
      },
      {
        name: '',
        dialCode: '965',
        countryCode: 'kw'
      },
      {
        name: '',
        dialCode: '996',
        countryCode: 'kg'
      },
      {
        name: '',
        dialCode: '856',
        countryCode: 'la'
      },
      {
        name: '',
        dialCode: '371',
        countryCode: 'lv'
      },
      {
        name: '',
        dialCode: '961',
        countryCode: 'lb'
      },
      {
        name: '',
        dialCode: '266',
        countryCode: 'ls'
      },
      {
        name: '',
        dialCode: '231',
        countryCode: 'lr'
      },
      {
        name: '',
        dialCode: '218',
        countryCode: 'ly'
      },
      {
        name: '',
        dialCode: '423',
        countryCode: 'li'
      },
      {
        name: '',
        dialCode: '370',
        countryCode: 'lt'
      },
      {
        name: '',
        dialCode: '352',
        countryCode: 'lu'
      },
      {
        name: '',
        dialCode: '853',
        countryCode: 'mo'
      },
      {
        name: '',
        dialCode: '389',
        countryCode: 'mk'
      },
      {
        name: '',
        dialCode: '261',
        countryCode: 'mg'
      },
      {
        name: '',
        dialCode: '265',
        countryCode: 'mw'
      },
      {
        name: '',
        dialCode: '60',
        countryCode: 'my'
      },
      {
        name: '',
        dialCode: '960',
        countryCode: 'mv'
      },
      {
        name: '',
        dialCode: '223',
        countryCode: 'ml'
      },
      {
        name: '',
        dialCode: '356',
        countryCode: 'mt'
      },
      {
        name: '',
        dialCode: '692',
        countryCode: 'mh'
      },
      {
        name: '',
        dialCode: '596',
        countryCode: 'mq'
      },
      {
        name: '',
        dialCode: '222',
        countryCode: 'mr'
      },
      {
        name: '',
        dialCode: '230',
        countryCode: 'mu'
      },
      {
        name: '',
        dialCode: '262',
        countryCode: 'yt'
      },
      {
        name: '',
        dialCode: '52',
        countryCode: 'mx'
      },
      {
        name: '',
        dialCode: '691',
        countryCode: 'fm'
      },
      {
        name: '',
        dialCode: '373',
        countryCode: 'md'
      },
      {
        name: '',
        dialCode: '377',
        countryCode: 'mc'
      },
      {
        name: '',
        dialCode: '976',
        countryCode: 'mn'
      },
      {
        name: '',
        dialCode: '382',
        countryCode: 'me'
      },
      {
        name: '',
        dialCode: '1664',
        countryCode: 'ms'
      },
      {
        name: '',
        dialCode: '212',
        countryCode: 'ma'
      },
      {
        name: '',
        dialCode: '258',
        countryCode: 'mz'
      },
      {
        name: '',
        dialCode: '95',
        countryCode: 'mm'
      },
      {
        name: '',
        dialCode: '264',
        countryCode: 'na'
      },
      {
        name: '',
        dialCode: '674',
        countryCode: 'nr'
      },
      {
        name: '',
        dialCode: '977',
        countryCode: 'np'
      },
      {
        name: '',
        dialCode: '31',
        countryCode: 'nl'
      },
      {
        name: '',
        dialCode: '687',
        countryCode: 'nc'
      },
      {
        name: '',
        dialCode: '64',
        countryCode: 'nz'
      },
      {
        name: '',
        dialCode: '505',
        countryCode: 'ni'
      },
      {
        name: '',
        dialCode: '227',
        countryCode: 'ne'
      },
      {
        name: '',
        dialCode: '234',
        countryCode: 'ng'
      },
      {
        name: '',
        dialCode: '683',
        countryCode: 'nu'
      },
      {
        name: '',
        dialCode: '672',
        countryCode: 'nf'
      },
      {
        name: '',
        dialCode: '850',
        countryCode: 'kp'
      },
      {
        name: '',
        dialCode: '1670',
        countryCode: 'mp'
      },
      {
        name: '',
        dialCode: '47',
        countryCode: 'no'
      },
      {
        name: '',
        dialCode: '968',
        countryCode: 'om'
      },
      {
        name: '',
        dialCode: '92',
        countryCode: 'pk'
      },
      {
        name: '',
        dialCode: '680',
        countryCode: 'pw'
      },
      {
        name: '',
        dialCode: '970',
        countryCode: 'ps'
      },
      {
        name: '',
        dialCode: '507',
        countryCode: 'pa'
      },
      {
        name: '',
        dialCode: '675',
        countryCode: 'pg'
      },
      {
        name: '',
        dialCode: '595',
        countryCode: 'py'
      },
      {
        name: '',
        dialCode: '51',
        countryCode: 'pe'
      },
      {
        name: '',
        dialCode: '63',
        countryCode: 'ph'
      },
      {
        name: '',
        dialCode: '48',
        countryCode: 'pl'
      },
      {
        name: '',
        dialCode: '351',
        countryCode: 'pt'
      },
      {
        name: '',
        dialCode: '1',
        countryCode: 'pr'
      },
      {
        name: '',
        dialCode: '974',
        countryCode: 'qa'
      },
      {
        name: '',
        dialCode: '262',
        countryCode: 're'
      },
      {
        name: '',
        dialCode: '40',
        countryCode: 'ro'
      },
      {
        name: '',
        dialCode: '7',
        countryCode: 'ru'
      },
      {
        name: '',
        dialCode: '250',
        countryCode: 'rw'
      },
      {
        name: '',
        dialCode: '590',
        countryCode: 'bl'
      },
      {
        name: '',
        dialCode: '290',
        countryCode: 'sh'
      },
      {
        name: '',
        dialCode: '1869',
        countryCode: 'kn'
      },
      {
        name: '',
        dialCode: '1758',
        countryCode: 'lc'
      },
      {
        name: '',
        dialCode: '508',
        countryCode: 'pm'
      },
      {
        name: '',
        dialCode: '1784',
        countryCode: 'vc'
      },
      {
        name: '',
        dialCode: '685',
        countryCode: 'ws'
      },
      {
        name: '',
        dialCode: '378',
        countryCode: 'sm'
      },
      {
        name: '',
        dialCode: '239',
        countryCode: 'st'
      },
      {
        name: '',
        dialCode: '966',
        countryCode: 'sa'
      },
      {
        name: '',
        dialCode: '221',
        countryCode: 'sn'
      },
      {
        name: '',
        dialCode: '381',
        countryCode: 'rs'
      },
      {
        name: '',
        dialCode: '248',
        countryCode: 'sc'
      },
      {
        name: '',
        dialCode: '232',
        countryCode: 'sl'
      },
      {
        name: '',
        dialCode: '65',
        countryCode: 'sg'
      },
      {
        name: '',
        dialCode: '1721',
        countryCode: 'sx'
      },
      {
        name: '',
        dialCode: '421',
        countryCode: 'sk'
      },
      {
        name: '',
        dialCode: '386',
        countryCode: 'si'
      },
      {
        name: '',
        dialCode: '677',
        countryCode: 'sb'
      },
      {
        name: '',
        dialCode: '252',
        countryCode: 'so'
      },
      {
        name: '',
        dialCode: '27',
        countryCode: 'za'
      },
      {
        name: '',
        dialCode: '82',
        countryCode: 'kr'
      },
      {
        name: '',
        dialCode: '211',
        countryCode: 'ss'
      },
      {
        name: '',
        dialCode: '34',
        countryCode: 'es'
      },
      {
        name: '',
        dialCode: '94',
        countryCode: 'lk'
      },
      {
        name: '',
        dialCode: '249',
        countryCode: 'sd'
      },
      {
        name: '',
        dialCode: '597',
        countryCode: 'sr'
      },
      {
        name: '',
        dialCode: '47',
        countryCode: 'sj'
      },
      {
        name: '',
        dialCode: '268',
        countryCode: 'sz'
      },
      {
        name: '',
        dialCode: '46',
        countryCode: 'se'
      },
      {
        name: '',
        dialCode: '41',
        countryCode: 'ch'
      },
      {
        name: '',
        dialCode: '963',
        countryCode: 'sy'
      },
      {
        name: '',
        dialCode: '886',
        countryCode: 'tw'
      },
      {
        name: '',
        dialCode: '992',
        countryCode: 'tj'
      },
      {
        name: '',
        dialCode: '255',
        countryCode: 'tz'
      },
      {
        name: '',
        dialCode: '66',
        countryCode: 'th'
      },
      {
        name: '',
        dialCode: '670',
        countryCode: 'tl'
      },
      {
        name: '',
        dialCode: '228',
        countryCode: 'tg'
      },
      {
        name: '',
        dialCode: '690',
        countryCode: 'tk'
      },
      {
        name: '',
        dialCode: '676',
        countryCode: 'to'
      },
      {
        name: '',
        dialCode: '1868',
        countryCode: 'tt'
      },
      {
        name: '',
        dialCode: '216',
        countryCode: 'tn'
      },
      {
        name: '',
        dialCode: '90',
        countryCode: 'tr'
      },
      {
        name: '',
        dialCode: '993',
        countryCode: 'tm'
      },
      {
        name: '',
        dialCode: '1649',
        countryCode: 'tc'
      },
      {
        name: '',
        dialCode: '688',
        countryCode: 'tv'
      },
      {
        name: '',
        dialCode: '1340',
        countryCode: 'vi'
      },
      {
        name: '',
        dialCode: '256',
        countryCode: 'ug'
      },
      {
        name: '',
        dialCode: '380',
        countryCode: 'ua'
      },
      {
        name: '',
        dialCode: '971',
        countryCode: 'ae'
      },
      {
        name: '',
        dialCode: '44',
        countryCode: 'gb'
      },
      {
        name: '',
        dialCode: '1',
        countryCode: 'us'
      },
      {
        name: '',
        dialCode: '598',
        countryCode: 'uy'
      },
      {
        name: '',
        dialCode: '998',
        countryCode: 'uz'
      },
      {
        name: '',
        dialCode: '678',
        countryCode: 'vu'
      },
      {
        name: '',
        dialCode: '39',
        countryCode: 'va'
      },
      {
        name: '',
        dialCode: '58',
        countryCode: 've'
      },
      {
        name: '',
        dialCode: '84',
        countryCode: 'vn'
      },
      {
        name: '',
        dialCode: '681',
        countryCode: 'wf'
      },
      {
        name: '',
        dialCode: '212',
        countryCode: 'eh'
      },
      {
        name: '',
        dialCode: '967',
        countryCode: 'ye'
      },
      {
        name: '',
        dialCode: '260',
        countryCode: 'zm'
      },
      {
        name: '',
        dialCode: '263',
        countryCode: 'zw'
      },
      {
        name: '',
        dialCode: '358',
        countryCode: 'ax'
      },
      {
        name: '',
        dialCode: '93',
        countryCode: 'af'
      },
      {
        name: '',
        dialCode: '355',
        countryCode: 'al'
      },
      {
        name: '',
        dialCode: '213',
        countryCode: 'dz'
      },
      {
        name: '',
        dialCode: '1684',
        countryCode: 'as'
      },
      {
        name: '',
        dialCode: '376',
        countryCode: 'ad'
      },
      {
        name: '',
        dialCode: '244',
        countryCode: 'ao'
      },
      {
        name: '',
        dialCode: '1264',
        countryCode: 'ai'
      },
      {
        name: '',
        dialCode: '1268',
        countryCode: 'ag'
      },
      {
        name: '',
        dialCode: '54',
        countryCode: 'ar'
      },
      {
        name: '',
        dialCode: '374',
        countryCode: 'am'
      },
      {
        name: '',
        dialCode: '297',
        countryCode: 'aw'
      },
      {
        name: '',
        dialCode: '43',
        countryCode: 'at'
      }
    ];

    console.log("original countriesZ length: ", countriesZ.length);

    // let get the locale based country names
    countriesZ.forEach(country => {
      country.name = LOCALES[locale][country.countryCode]
        .toLowerCase()
        .replace(/\b(\w)/g, (s) => s.toUpperCase());
    });
    return countriesZ;
  }

  

const COUNTRY_PHONE_DATA = [
   {
      alpha2: 'US',
      alpha3: 'USA',
      country_code: '1',
      country_name: 'United States',
      mobile_begin_with: ['201', '202', '203', '205', '206', '207', '208', '209', '210', '212', '213', '214', '215',
            '216', '217', '218', '219', '220', '223', '224', '225', '227', '228', '229', '231', '234', '239', '240',
            '248', '251', '252', '253', '254', '256', '260', '262', '267', '269', '270', '272', '274', '276', '278',
            '281', '283', '301', '302', '303', '304', '305', '307', '308', '309', '310', '312', '313', '314', '315',
            '316', '317', '318', '319', '320', '321', '323', '325', '327', '330', '331', '332', '334', '336', '337',
            '339', '341', '346', '347', '351', '352', '360', '361', '364', '369', '380', '385', '386', '401', '402',
            '404', '405', '406', '407', '408', '409', '410', '412', '413', '414', '415', '417', '419', '423', '424',
            '425', '430', '432', '434', '435', '440', '441', '442', '443', '445', '447', '458', '463', '464', '469', '470', '475',
            '478', '479', '480', '484', '501', '502', '503', '504', '505', '507', '508', '509', '510', '512', '513',
            '515', '516', '517', '518', '520', '530', '531', '534', '539', '540', '541', '551', '557', '559', '561',
            '562', '563', '564', '567', '570', '571', '572', '573', '574', '575', '580', '582', '585', '586', '601', '602',
            '603', '605', '606', '607', '608', '609', '610', '612', '614', '615', '616', '617', '618', '619', '620',
            '623', '626', '627', '628', '629', '630', '631', '636', '641', '646', '650', '651', '657', '659', '660',
            '661', '662', '667', '669', '678', '679', '680', '681', '682', '689', '701', '702', '703', '704', '706', '707',
            '708', '712', '713', '714', '715', '716', '717', '718', '719', '720', '724', '725', '726', '727', '730', '731',
            '732', '734', '737', '740', '743', '747', '752', '754', '757', '760', '762', '763', '764', '765', '769', '770',
            '772', '773', '774', '775', '779', '781', '785', '786', '787', '801', '802', '803', '804', '805', '806', '808',
            '810', '812', '813', '814', '815', '816', '817', '818', '820', '828', '830', '831', '832', '835', '838', '840', '843', '845',
            '847', '848', '850', '854', '856', '857', '858', '859', '860', '862', '863', '864', '865', '870', '872',
            '878', '901', '903', '904', '906', '907', '908', '909', '910', '912', '913', '914', '915', '916', '917',
            '918', '919', '920', '925', '927', '928', '929', '931', '934', '935', '936', '937', '938', '939', '940', '941', '945',
            '947', '949', '951', '952', '954', '956', '957', '959', '970', '971', '972', '973', '975', '978', '979',
            '980', '984', '985', '986', '989', '888', '800', '833', '844', '855', '866', '877', '463', '279'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'AW',
      alpha3: 'ABW',
      country_code: '297',
      country_name: 'Aruba',
      mobile_begin_with: ['5', '6', '7', '9'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'AF',
      alpha3: 'AFG',
      country_code: '93',
      country_name: 'Afghanistan',
      mobile_begin_with: ['7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'AO',
      alpha3: 'AGO',
      country_code: '244',
      country_name: 'Angola',
      mobile_begin_with: ['9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'AI',
      alpha3: 'AIA',
      country_code: '1',
      country_name: 'Anguilla',
      mobile_begin_with: ['2645', '2647'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'AX',
      alpha3: 'ALA',
      country_code: '358',
      country_name: 'Åland Islands',
      mobile_begin_with: ['18'],
      phone_number_lengths: [6, 7, 8]
   },
   {
      alpha2: 'AL',
      alpha3: 'ALB',
      country_code: '355',
      country_name: 'Albania',
      mobile_begin_with: ['6'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'AD',
      alpha3: 'AND',
      country_code: '376',
      country_name: 'Andorra',
      mobile_begin_with: ['3', '4', '6'],
      phone_number_lengths: [6]
   },
   {
      alpha2: 'AE',
      alpha3: 'ARE',
      country_code: '971',
      country_name: 'United Arab Emirates',
      mobile_begin_with: ['5'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'AR',
      alpha3: 'ARG',
      country_code: '54',
      country_name: 'Argentina',
      mobile_begin_with: ['1', '2', '3'], // Same for mobile and landlines
      phone_number_lengths: [8, 9, 10, 11, 12]
   },
   {
      alpha2: 'AM',
      alpha3: 'ARM',
      country_code: '374',
      country_name: 'Armenia',
      mobile_begin_with: ['3', '4', '5', '7', '9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'AS',
      alpha3: 'ASM',
      country_code: '1',
      country_name: 'American Samoa',
      mobile_begin_with: ['684733', '684258'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'AG',
      alpha3: 'ATG',
      country_code: '1',
      country_name: 'Antigua and Barbuda',
      mobile_begin_with: ['2687'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'AU',
      alpha3: 'AUS',
      country_code: '61',
      country_name: 'Australia',
      mobile_begin_with: ['4'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'AT',
      alpha3: 'AUT',
      country_code: '43',
      country_name: 'Austria',
      mobile_begin_with: ['6'],
      phone_number_lengths: [10, 11, 12, 13, 14]
   },
   {
      alpha2: 'AZ',
      alpha3: 'AZE',
      country_code: '994',
      country_name: 'Azerbaijan',
      mobile_begin_with: ['4', '5', '6', '7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'BI',
      alpha3: 'BDI',
      country_code: '257',
      country_name: 'Burundi',
      mobile_begin_with: ['7', '29'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'BE',
      alpha3: 'BEL',
      country_code: '32',
      country_name: 'Belgium',
      mobile_begin_with: ['4', '3'],
      phone_number_lengths: [9, 8]
   },
   {
      alpha2: 'BJ',
      alpha3: 'BEN',
      country_code: '229',
      country_name: 'Benin',
      mobile_begin_with: ['4', '6', '9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'BF',
      alpha3: 'BFA',
      country_code: '226',
      country_name: 'Burkina Faso',
      mobile_begin_with: ['6', '7'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'BD',
      alpha3: 'BGD',
      country_code: '880',
      country_name: 'Bangladesh',
      mobile_begin_with: ['1'],
      phone_number_lengths: [8, 9, 10]
   },
   {
      alpha2: 'BG',
      alpha3: 'BGR',
      country_code: '359',
      country_name: 'Bulgaria',
      mobile_begin_with: ['87', '88', '89', '98', '99', '43'],
      phone_number_lengths: [8, 9]
   },
   {
      alpha2: 'BH',
      alpha3: 'BHR',
      country_code: '973',
      country_name: 'Bahrain',
      mobile_begin_with: ['3'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'BS',
      alpha3: 'BHS',
      country_code: '1',
      country_name: 'Bahamas',
      mobile_begin_with: ['242'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'BA',
      alpha3: 'BIH',
      country_code: '387',
      country_name: 'Bosnia and Herzegovina',
      mobile_begin_with: ['6'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'BY',
      alpha3: 'BLR',
      country_code: '375',
      country_name: 'Belarus',
      mobile_begin_with: ['25', '29', '33', '44'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'BZ',
      alpha3: 'BLZ',
      country_code: '501',
      country_name: 'Belize',
      mobile_begin_with: ['6'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'BM',
      alpha3: 'BMU',
      country_code: '1',
      country_name: 'Bermuda',
      mobile_begin_with: ['4413', '4415', '4417'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'BO',
      alpha3: 'BOL',
      country_code: '591',
      country_name: 'Bolivia',
      mobile_begin_with: ['6', '7'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'BR',
      alpha3: 'BRA',
      country_code: '55',
      country_name: 'Brazil',
      mobile_begin_with: [
            '119', '129', '139', '149', '159', '169', '179', '189', '199', '219', '229', '249', '279', '289',
            '319', '329', '339', '349', '359', '379', '389',
            '419', '429', '439', '449', '459', '469', '479', '489', '499',
            '519', '539', '549', '559',
            '619', '629', '639', '649', '659', '669', '679', '689', '699',
            '719', '739', '749', '759', '779', '799',
            '819', '829', '839', '849', '859', '869', '879', '889', '899',
            '919', '929', '939', '949', '959', '969', '979', '989', '999',
      ],
      phone_number_lengths: [11]
   },
   {
      alpha2: 'BB',
      alpha3: 'BRB',
      country_code: '1',
      country_name: 'Barbados',
      mobile_begin_with: ['246'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'BN',
      alpha3: 'BRN',
      country_code: '673',
      country_name: 'Brunei Darussalam',
      mobile_begin_with: ['7', '8'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'BT',
      alpha3: 'BTN',
      country_code: '975',
      country_name: 'Bhutan',
      mobile_begin_with: ['17'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'BW',
      alpha3: 'BWA',
      country_code: '267',
      country_name: 'Botswana',
      mobile_begin_with: ['71', '72', '73', '74', '75', '76'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'CF',
      alpha3: 'CAF',
      country_code: '236',
      country_name: 'Central African Republic',
      mobile_begin_with: ['7'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'CA',
      alpha3: 'CAN',
      country_code: '1',
      country_name: 'Canada',
      mobile_begin_with: ['204', '226', '236', '249', '250', '289', '306', '343', '365', '367', '403', '416', '418', '431',
            '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '600', '604', '613', '639', '647', '672', '705',
            '709', '778', '780', '807', '819', '825', '867', '873', '902', '905'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'CH',
      alpha3: 'CHE',
      country_code: '41',
      country_name: 'Switzerland',
      mobile_begin_with: ['74', '75', '76', '77', '78', '79'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'CL',
      alpha3: 'CHL',
      country_code: '56',
      country_name: 'Chile',
      mobile_begin_with: ['9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'CN',
      alpha3: 'CHN',
      country_code: '86',
      country_name: 'China',
      mobile_begin_with: ['13', '14', '15', '17', '18', '19', '16'],
      phone_number_lengths: [11]
   },
   {
      alpha2: 'CI',
      alpha3: 'CIV',
      country_code: '225',
      country_name: "Côte D'Ivoire",
      mobile_begin_with: ['0', '4', '5', '6', '7', '8'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'CM',
      alpha3: 'CMR',
      country_code: '237',
      country_name: 'Cameroon',
      mobile_begin_with: ['6'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'CD',
      alpha3: 'COD',
      country_code: '243',
      country_name: 'Congo, The Democratic Republic Of The',
      mobile_begin_with: ['8', '9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'CG',
      alpha3: 'COG',
      country_code: '242',
      country_name: 'Congo',
      mobile_begin_with: ['0'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'CK',
      alpha3: 'COK',
      country_code: '682',
      country_name: 'Cook Islands',
      mobile_begin_with: ['5', '7'],
      phone_number_lengths: [5]
   },
   {
      alpha2: 'CO',
      alpha3: 'COL',
      country_code: '57',
      country_name: 'Colombia',
      mobile_begin_with: ['3'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'KM',
      alpha3: 'COM',
      country_code: '269',
      country_name: 'Comoros',
      mobile_begin_with: ['3', '76'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'CV',
      alpha3: 'CPV',
      country_code: '238',
      country_name: 'Cape Verde',
      mobile_begin_with: ['5', '9'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'CR',
      alpha3: 'CRI',
      country_code: '506',
      country_name: 'Costa Rica',
      mobile_begin_with: ['5', '6', '7', '8'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'CU',
      alpha3: 'CUB',
      country_code: '53',
      country_name: 'Cuba',
      mobile_begin_with: ['5'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'KY',
      alpha3: 'CYM',
      country_code: '1',
      country_name: 'Cayman Islands',
      mobile_begin_with: ['345'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'CY',
      alpha3: 'CYP',
      country_code: '357',
      country_name: 'Cyprus',
      mobile_begin_with: ['9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'CZ',
      alpha3: 'CZE',
      country_code: '420',
      country_name: 'Czech Republic',
      mobile_begin_with: ['6', '7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'DE',
      alpha3: 'DEU',
      country_code: '49',
      country_name: 'Germany',
      mobile_begin_with: ['15', '16', '17'],
      phone_number_lengths: [10, 11]
   },
   {
      alpha2: 'DJ',
      alpha3: 'DJI',
      country_code: '253',
      country_name: 'Djibouti',
      mobile_begin_with: ['77'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'DM',
      alpha3: 'DMA',
      country_code: '1',
      country_name: 'Dominica',
      mobile_begin_with: ['767'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'DK',
      alpha3: 'DNK',
      country_code: '45',
      country_name: 'Denmark',
      mobile_begin_with: ['2', '30', '31', '40', '41', '42', '50', '51', '52', '53', '60', '61', '71', '81', '91', '92', '93'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'DO',
      alpha3: 'DOM',
      country_code: '1',
      country_name: 'Dominican Republic',
      mobile_begin_with: ['809', '829', '849'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'DZ',
      alpha3: 'DZA',
      country_code: '213',
      country_name: 'Algeria',
      mobile_begin_with: ['5', '6', '7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'EC',
      alpha3: 'ECU',
      country_code: '593',
      country_name: 'Ecuador',
      mobile_begin_with: ['9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'EG',
      alpha3: 'EGY',
      country_code: '20',
      country_name: 'Egypt',
      mobile_begin_with: ['1'],
      phone_number_lengths: [10, 8]
   },
   {
      alpha2: 'ER',
      alpha3: 'ERI',
      country_code: '291',
      country_name: 'Eritrea',
      mobile_begin_with: ['1', '7', '8'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'ES',
      alpha3: 'ESP',
      country_code: '34',
      country_name: 'Spain',
      mobile_begin_with: ['6', '7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'EE',
      alpha3: 'EST',
      country_code: '372',
      country_name: 'Estonia',
      mobile_begin_with: ['5', '81', '82', '83'],
      phone_number_lengths: [7, 8]
   },
   {
      alpha2: 'ET',
      alpha3: 'ETH',
      country_code: '251',
      country_name: 'Ethiopia',
      mobile_begin_with: ['9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'FI',
      alpha3: 'FIN',
      country_code: '358',
      country_name: 'Finland',
      mobile_begin_with: ['4', '5'],
      phone_number_lengths: [9, 10]
   },
   {
      alpha2: 'FJ',
      alpha3: 'FJI',
      country_code: '679',
      country_name: 'Fiji',
      mobile_begin_with: ['7', '9'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'FK',
      alpha3: 'FLK',
      country_code: '500',
      country_name: 'Falkland Islands (Malvinas)',
      mobile_begin_with: ['5', '6'],
      phone_number_lengths: [5]
   },
   {
      alpha2: 'FR',
      alpha3: 'FRA',
      country_code: '33',
      country_name: 'France',
      mobile_begin_with: ['6', '7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'FO',
      alpha3: 'FRO',
      country_code: '298',
      country_name: 'Faroe Islands',
      mobile_begin_with: [],
      phone_number_lengths: [6]
   },
   {
      alpha2: 'FM',
      alpha3: 'FSM',
      country_code: '691',
      country_name: 'Micronesia, Federated States Of',
      mobile_begin_with: [],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'GA',
      alpha3: 'GAB',
      country_code: '241',
      country_name: 'Gabon',
      mobile_begin_with: ['2', '3', '4', '5', '6', '7'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'GB',
      alpha3: 'GBR',
      country_code: '44',
      country_name: 'United Kingdom',
      mobile_begin_with: ['7'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'GE',
      alpha3: 'GEO',
      country_code: '995',
      country_name: 'Georgia',
      mobile_begin_with: ['5', '7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'GH',
      alpha3: 'GHA',
      country_code: '233',
      country_name: 'Ghana',
      mobile_begin_with: ['2', '5'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'GI',
      alpha3: 'GIB',
      country_code: '350',
      country_name: 'Gibraltar',
      mobile_begin_with: ['5'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'GN',
      alpha3: 'GIN',
      country_code: '224',
      country_name: 'Guinea',
      mobile_begin_with: ['6'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'GP',
      alpha3: 'GLP',
      country_code: '590',
      country_name: 'Guadeloupe',
      mobile_begin_with: ['690'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'GM',
      alpha3: 'GMB',
      country_code: '220',
      country_name: 'Gambia',
      mobile_begin_with: ['7', '9'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'GW',
      alpha3: 'GNB',
      country_code: '245',
      country_name: 'Guinea-Bissau',
      mobile_begin_with: ['5', '6', '7'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'GQ',
      alpha3: 'GNQ',
      country_code: '240',
      country_name: 'Equatorial Guinea',
      mobile_begin_with: ['222', '551'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'GR',
      alpha3: 'GRC',
      country_code: '30',
      country_name: 'Greece',
      mobile_begin_with: ['6'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'GD',
      alpha3: 'GRD',
      country_code: '1',
      country_name: 'Grenada',
      mobile_begin_with: ['473'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'GL',
      alpha3: 'GRL',
      country_code: '299',
      country_name: 'Greenland',
      mobile_begin_with: ['2', '4', '5'],
      phone_number_lengths: [6]
   },
   {
      alpha2: 'GT',
      alpha3: 'GTM',
      country_code: '502',
      country_name: 'Guatemala',
      mobile_begin_with: ['3', '4', '5'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'GF',
      alpha3: 'GUF',
      country_code: '594',
      country_name: 'French Guiana',
      mobile_begin_with: ['694'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'GU',
      alpha3: 'GUM',
      country_code: '1',
      country_name: 'Guam',
      mobile_begin_with: ['671'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'GY',
      alpha3: 'GUY',
      country_code: '592',
      country_name: 'Guyana',
      mobile_begin_with: ['6'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'HK',
      alpha3: 'HKG',
      country_code: '852',
      country_name: 'Hong Kong',
      mobile_begin_with: ['4', '5', '6', '70', '71', '72', '73', '81', '82', '83', '84', '85', '86', '87', '88', '89', '9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'HN',
      alpha3: 'HND',
      country_code: '504',
      country_name: 'Honduras',
      mobile_begin_with: ['3', '7', '8', '9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'HR',
      alpha3: 'HRV',
      country_code: '385',
      country_name: 'Croatia',
      mobile_begin_with: ['9'],
      phone_number_lengths: [8, 9]
   },
   {
      alpha2: 'HT',
      alpha3: 'HTI',
      country_code: '509',
      country_name: 'Haiti',
      mobile_begin_with: ['3', '4'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'HU',
      alpha3: 'HUN',
      country_code: '36',
      country_name: 'Hungary',
      mobile_begin_with: ['20', '30', '31', '50', '70'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'ID',
      alpha3: 'IDN',
      country_code: '62',
      country_name: 'Indonesia',
      mobile_begin_with: ['8'],
      phone_number_lengths: [9, 10, 11, 12]
   },
   {
      alpha2: 'IN',
      alpha3: 'IND',
      country_code: '91',
      country_name: 'India',
      mobile_begin_with: ['6', '7', '8', '9'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'IE',
      alpha3: 'IRL',
      country_code: '353',
      country_name: 'Ireland',
      mobile_begin_with: ['82', '83', '84', '85', '86', '87', '88', '89'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'IR',
      alpha3: 'IRN',
      country_code: '98',
      country_name: 'Iran, Islamic Republic Of',
      mobile_begin_with: ['9'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'IQ',
      alpha3: 'IRQ',
      country_code: '964',
      country_name: 'Iraq',
      mobile_begin_with: ['7'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'IS',
      alpha3: 'ISL',
      country_code: '354',
      country_name: 'Iceland',
      mobile_begin_with: ['6', '7', '8'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'IL',
      alpha3: 'ISR',
      country_code: '972',
      country_name: 'Israel',
      mobile_begin_with: ['5'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'IT',
      alpha3: 'ITA',
      country_code: '39',
      country_name: 'Italy',
      mobile_begin_with: ['3'],
      phone_number_lengths: [9, 10]
   },
   {
      alpha2: 'JM',
      alpha3: 'JAM',
      country_code: '1',
      country_name: 'Jamaica',
      mobile_begin_with: ['876'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'JO',
      alpha3: 'JOR',
      country_code: '962',
      country_name: 'Jordan',
      mobile_begin_with: ['7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'JP',
      alpha3: 'JPN',
      country_code: '81',
      country_name: 'Japan',
      mobile_begin_with: ['70', '80', '90'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'KZ',
      alpha3: 'KAZ',
      country_code: '7',
      country_name: 'Kazakhstan',
      mobile_begin_with: ['70', '74', '77'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'KE',
      alpha3: 'KEN',
      country_code: '254',
      country_name: 'Kenya',
      mobile_begin_with: ['7', '1'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'KG',
      alpha3: 'KGZ',
      country_code: '996',
      country_name: 'Kyrgyzstan',
      mobile_begin_with: ['5', '7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'KH',
      alpha3: 'KHM',
      country_code: '855',
      country_name: 'Cambodia',
      mobile_begin_with: ['1', '6', '7', '8', '9'],
      phone_number_lengths: [8, 9]
   },
   {
      alpha2: 'KI',
      alpha3: 'KIR',
      country_code: '686',
      country_name: 'Kiribati',
      mobile_begin_with: ['9', '30'],
      phone_number_lengths: [5]
   },
   {
      alpha2: 'KN',
      alpha3: 'KNA',
      country_code: '1',
      country_name: 'Saint Kitts And Nevis',
      mobile_begin_with: ['869'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'KR',
      alpha3: 'KOR',
      country_code: '82',
      country_name: 'Korea, Republic of',
      mobile_begin_with: ['1'],
      phone_number_lengths: [9, 10]
   },
   {
      alpha2: 'KW',
      alpha3: 'KWT',
      country_code: '965',
      country_name: 'Kuwait',
      mobile_begin_with: ['5', '6', '9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'LA',
      alpha3: 'LAO',
      country_code: '856',
      country_name: "Lao People's Democratic Republic",
      mobile_begin_with: ['20'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'LB',
      alpha3: 'LBN',
      country_code: '961',
      country_name: 'Lebanon',
      mobile_begin_with: ['3', '7'],
      phone_number_lengths: [7, 8]
   },
   {
      alpha2: 'LR',
      alpha3: 'LBR',
      country_code: '231',
      country_name: 'Liberia',
      mobile_begin_with: ['4', '5', '6', '7'],
      phone_number_lengths: [7, 8]
   },
   {
      alpha2: 'LY',
      alpha3: 'LBY',
      country_code: '218',
      country_name: 'Libyan Arab Jamahiriya',
      mobile_begin_with: ['9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'LC',
      alpha3: 'LCA',
      country_code: '1',
      country_name: 'Saint Lucia',
      mobile_begin_with: ['758'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'LI',
      alpha3: 'LIE',
      country_code: '423',
      country_name: 'Liechtenstein',
      mobile_begin_with: ['7'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'LK',
      alpha3: 'LKA',
      country_code: '94',
      country_name: 'Sri Lanka',
      mobile_begin_with: ['7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'LS',
      alpha3: 'LSO',
      country_code: '266',
      country_name: 'Lesotho',
      mobile_begin_with: ['5', '6'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'LT',
      alpha3: 'LTU',
      country_code: '370',
      country_name: 'Lithuania',
      mobile_begin_with: ['6'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'LU',
      alpha3: 'LUX',
      country_code: '352',
      country_name: 'Luxembourg',
      mobile_begin_with: ['6'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'LV',
      alpha3: 'LVA',
      country_code: '371',
      country_name: 'Latvia',
      mobile_begin_with: ['2'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'MO',
      alpha3: 'MAC',
      country_code: '853',
      country_name: 'Macao',
      mobile_begin_with: ['6'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'MA',
      alpha3: 'MAR',
      country_code: '212',
      country_name: 'Morocco',
      mobile_begin_with: ['6', '7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'MC',
      alpha3: 'MCO',
      country_code: '377',
      country_name: 'Monaco',
      mobile_begin_with: ['4', '6'],
      phone_number_lengths: [8, 9]
   },
   {
      alpha2: 'MD',
      alpha3: 'MDA',
      country_code: '373',
      country_name: 'Moldova, Republic of',
      mobile_begin_with: ['6', '7'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'MG',
      alpha3: 'MDG',
      country_code: '261',
      country_name: 'Madagascar',
      mobile_begin_with: ['3'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'MV',
      alpha3: 'MDV',
      country_code: '960',
      country_name: 'Maldives',
      mobile_begin_with: ['7', '9'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'MX',
      alpha3: 'MEX',
      country_code: '52',
      country_name: 'Mexico',
      mobile_begin_with: [''],
      phone_number_lengths: [10, 11]
   },
   {
      alpha2: 'MH',
      alpha3: 'MHL',
      country_code: '692',
      country_name: 'Marshall Islands',
      mobile_begin_with: [],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'MK',
      alpha3: 'MKD',
      country_code: '389',
      country_name: 'Macedonia, the Former Yugoslav Republic Of',
      mobile_begin_with: ['7'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'ML',
      alpha3: 'MLI',
      country_code: '223',
      country_name: 'Mali',
      mobile_begin_with: ['6', '7'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'MT',
      alpha3: 'MLT',
      country_code: '356',
      country_name: 'Malta',
      mobile_begin_with: ['7', '9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'MM',
      alpha3: 'MMR',
      country_code: '95',
      country_name: 'Myanmar',
      mobile_begin_with: ['9'],
      phone_number_lengths: [8, 9, 10]
   },
   {
      alpha2: 'ME',
      alpha3: 'MNE',
      country_code: '382',
      country_name: 'Montenegro',
      mobile_begin_with: ['6'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'MN',
      alpha3: 'MNG',
      country_code: '976',
      country_name: 'Mongolia',
      mobile_begin_with: ['5', '8', '9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'MP',
      alpha3: 'MNP',
      country_code: '1',
      country_name: 'Northern Mariana Islands',
      mobile_begin_with: ['670'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'MZ',
      alpha3: 'MOZ',
      country_code: '258',
      country_name: 'Mozambique',
      mobile_begin_with: ['8'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'MR',
      alpha3: 'MRT',
      country_code: '222',
      country_name: 'Mauritania',
      mobile_begin_with: [],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'MS',
      alpha3: 'MSR',
      country_code: '1',
      country_name: 'Montserrat',
      mobile_begin_with: ['664'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'MQ',
      alpha3: 'MTQ',
      country_code: '596',
      country_name: 'Martinique',
      mobile_begin_with: ['696'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'MU',
      alpha3: 'MUS',
      country_code: '230',
      country_name: 'Mauritius',
      mobile_begin_with: ['5'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'MW',
      alpha3: 'MWI',
      country_code: '265',
      country_name: 'Malawi',
      mobile_begin_with: ['77', '88', '99'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'MY',
      alpha3: 'MYS',
      country_code: '60',
      country_name: 'Malaysia',
      mobile_begin_with: ['1', '6'],
      phone_number_lengths: [9, 10, 8]
   },
   {
      alpha2: 'YT',
      alpha3: 'MYT',
      country_code: '262',
      country_name: 'Mayotte',
      mobile_begin_with: ['639'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'NA',
      alpha3: 'NAM',
      country_code: '264',
      country_name: 'Namibia',
      mobile_begin_with: ['60', '81', '82', '85'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'NC',
      alpha3: 'NCL',
      country_code: '687',
      country_name: 'New Caledonia',
      mobile_begin_with: ['7', '8', '9'],
      phone_number_lengths: [6]
   },
   {
      alpha2: 'NE',
      alpha3: 'NER',
      country_code: '227',
      country_name: 'Niger',
      mobile_begin_with: ['9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'NF',
      alpha3: 'NFK',
      country_code: '672',
      country_name: 'Norfolk Island',
      mobile_begin_with: ['5', '8'],
      phone_number_lengths: [5]
   },
   {
      alpha2: 'NG',
      alpha3: 'NGA',
      country_code: '234',
      country_name: 'Nigeria',
      mobile_begin_with: ['70', '80', '81', '90', '91'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'NI',
      alpha3: 'NIC',
      country_code: '505',
      country_name: 'Nicaragua',
      mobile_begin_with: ['8'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'NU',
      alpha3: 'NIU',
      country_code: '683',
      country_name: 'Niue',
      mobile_begin_with: [],
      phone_number_lengths: [4]
   },
   {
      alpha2: 'NL',
      alpha3: 'NLD',
      country_code: '31',
      country_name: 'Netherlands',
      mobile_begin_with: ['6'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'NO',
      alpha3: 'NOR',
      country_code: '47',
      country_name: 'Norway',
      mobile_begin_with: ['4', '9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'NP',
      alpha3: 'NPL',
      country_code: '977',
      country_name: 'Nepal',
      mobile_begin_with: ['97', '98'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'NR',
      alpha3: 'NRU',
      country_code: '674',
      country_name: 'Nauru',
      mobile_begin_with: ['555'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'NZ',
      alpha3: 'NZL',
      country_code: '64',
      country_name: 'New Zealand',
      mobile_begin_with: ['2'],
      phone_number_lengths: [8, 9, 10]
   },
   {
      alpha2: 'OM',
      alpha3: 'OMN',
      country_code: '968',
      country_name: 'Oman',
      mobile_begin_with: ['9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'PK',
      alpha3: 'PAK',
      country_code: '92',
      country_name: 'Pakistan',
      mobile_begin_with: ['3'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'PA',
      alpha3: 'PAN',
      country_code: '507',
      country_name: 'Panama',
      mobile_begin_with: ['6'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'PE',
      alpha3: 'PER',
      country_code: '51',
      country_name: 'Peru',
      mobile_begin_with: ['9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'PH',
      alpha3: 'PHL',
      country_code: '63',
      country_name: 'Philippines',
      mobile_begin_with: ['9'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'PW',
      alpha3: 'PLW',
      country_code: '680',
      country_name: 'Palau',
      mobile_begin_with: [],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'PG',
      alpha3: 'PNG',
      country_code: '675',
      country_name: 'Papua New Guinea',
      mobile_begin_with: ['7'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'PL',
      alpha3: 'POL',
      country_code: '48',
      country_name: 'Poland',
      mobile_begin_with: ['4', '5', '6', '7', '8'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'PR',
      alpha3: 'PRI',
      country_code: '1',
      country_name: 'Puerto Rico',
      mobile_begin_with: ['787', '939'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'PT',
      alpha3: 'PRT',
      country_code: '351',
      country_name: 'Portugal',
      mobile_begin_with: ['9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'PY',
      alpha3: 'PRY',
      country_code: '595',
      country_name: 'Paraguay',
      mobile_begin_with: ['9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'PS',
      alpha3: 'PSE',
      country_code: '970',
      country_name: 'Palestinian Territory, Occupied',
      mobile_begin_with: ['5'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'PF',
      alpha3: 'PYF',
      country_code: '689',
      country_name: 'French Polynesia',
      mobile_begin_with: ['8'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'QA',
      alpha3: 'QAT',
      country_code: '974',
      country_name: 'Qatar',
      mobile_begin_with: ['3', '5', '6', '7'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'RE',
      alpha3: 'REU',
      country_code: '262',
      country_name: 'Réunion',
      mobile_begin_with: ['692', '693'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'RO',
      alpha3: 'ROU',
      country_code: '40',
      country_name: 'Romania',
      mobile_begin_with: ['7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'RU',
      alpha3: 'RUS',
      country_code: '7',
      country_name: 'Russian Federation',
      mobile_begin_with: ['9', '495', '498', '499'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'RW',
      alpha3: 'RWA',
      country_code: '250',
      country_name: 'Rwanda',
      mobile_begin_with: ['7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'SA',
      alpha3: 'SAU',
      country_code: '966',
      country_name: 'Saudi Arabia',
      mobile_begin_with: ['5'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'SD',
      alpha3: 'SDN',
      country_code: '249',
      country_name: 'Sudan',
      mobile_begin_with: ['9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'SS',
      alpha3: 'SSD',
      country_code: '211',
      country_name: 'South Sudan',
      mobile_begin_with: ['9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'SN',
      alpha3: 'SEN',
      country_code: '221',
      country_name: 'Senegal',
      mobile_begin_with: ['7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'SG',
      alpha3: 'SGP',
      country_code: '65',
      country_name: 'Singapore',
      mobile_begin_with: ['8', '9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'SH',
      alpha3: 'SHN',
      country_code: '290',
      country_name: 'Saint Helena',
      mobile_begin_with: [],
      phone_number_lengths: [4]
   },
   {
      alpha2: 'SJ',
      alpha3: 'SJM',
      country_code: '47',
      country_name: 'Svalbard And Jan Mayen',
      mobile_begin_with: ['79'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'SB',
      alpha3: 'SLB',
      country_code: '677',
      country_name: 'Solomon Islands',
      mobile_begin_with: ['7', '8'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'SL',
      alpha3: 'SLE',
      country_code: '232',
      country_name: 'Sierra Leone',
      mobile_begin_with: ['21', '25', '30', '33', '34', '40', '44', '50', '55', '76', '77', '78', '79', '88'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'SV',
      alpha3: 'SLV',
      country_code: '503',
      country_name: 'El Salvador',
      mobile_begin_with: ['7'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'SM',
      alpha3: 'SMR',
      country_code: '378',
      country_name: 'San Marino',
      mobile_begin_with: ['3', '6'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'SO',
      alpha3: 'SOM',
      country_code: '252',
      country_name: 'Somalia',
      mobile_begin_with: ['9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'SX',
      alpha3: 'SXM',
      country_code: '1',
      country_name: 'Sint Maarten',
      mobile_begin_with: ['721'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'PM',
      alpha3: 'SPM',
      country_code: '508',
      country_name: 'Saint Pierre And Miquelon',
      mobile_begin_with: ['55', '41'],
      phone_number_lengths: [6]
   },
   {
      alpha2: 'RS',
      alpha3: 'SRB',
      country_code: '381',
      country_name: 'Serbia',
      mobile_begin_with: ['6'],
      phone_number_lengths: [8, 9]
   },
   {
      alpha2: 'ST',
      alpha3: 'STP',
      country_code: '239',
      country_name: 'Sao Tome and Principe',
      mobile_begin_with: ['98', '99'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'SR',
      alpha3: 'SUR',
      country_code: '597',
      country_name: 'Suriname',
      mobile_begin_with: ['6', '7', '8'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'SK',
      alpha3: 'SVK',
      country_code: '421',
      country_name: 'Slovakia',
      mobile_begin_with: ['9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'SI',
      alpha3: 'SVN',
      country_code: '386',
      country_name: 'Slovenia',
      mobile_begin_with: ['3', '4', '5', '6', '7'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'SE',
      alpha3: 'SWE',
      country_code: '46',
      country_name: 'Sweden',
      mobile_begin_with: ['7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'SC',
      alpha3: 'SYC',
      country_code: '248',
      country_name: 'Seychelles',
      mobile_begin_with: ['2'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'SY',
      alpha3: 'SYR',
      country_code: '963',
      country_name: 'Syrian Arab Republic',
      mobile_begin_with: ['9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'TC',
      alpha3: 'TCA',
      country_code: '1',
      country_name: 'Turks and Caicos Islands',
      mobile_begin_with: ['6492', '6493', '6494'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'TD',
      alpha3: 'TCD',
      country_code: '235',
      country_name: 'Chad',
      mobile_begin_with: ['6', '7', '9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'TG',
      alpha3: 'TGO',
      country_code: '228',
      country_name: 'Togo',
      mobile_begin_with: ['9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'TH',
      alpha3: 'THA',
      country_code: '66',
      country_name: 'Thailand',
      mobile_begin_with: ['6', '8', '9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'TJ',
      alpha3: 'TJK',
      country_code: '992',
      country_name: 'Tajikistan',
      mobile_begin_with: ['9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'TK',
      alpha3: 'TKL',
      country_code: '690',
      country_name: 'Tokelau',
      mobile_begin_with: [],
      phone_number_lengths: [4]
   },
   {
      alpha2: 'TM',
      alpha3: 'TKM',
      country_code: '993',
      country_name: 'Turkmenistan',
      mobile_begin_with: ['6'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'TL',
      alpha3: 'TLS',
      country_code: '670',
      country_name: 'Timor-Leste',
      mobile_begin_with: ['7'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'TO',
      alpha3: 'TON',
      country_code: '676',
      country_name: 'Tonga',
      mobile_begin_with: [],
      phone_number_lengths: [5]
   },
   {
      alpha2: 'TT',
      alpha3: 'TTO',
      country_code: '1',
      country_name: 'Trinidad and Tobago',
      mobile_begin_with: ['868'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'TN',
      alpha3: 'TUN',
      country_code: '216',
      country_name: 'Tunisia',
      mobile_begin_with: ['2', '4', '5', '9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'TR',
      alpha3: 'TUR',
      country_code: '90',
      country_name: 'Turkey',
      mobile_begin_with: ['5'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'TV',
      alpha3: 'TUV',
      country_code: '688',
      country_name: 'Tuvalu',
      mobile_begin_with: [],
      phone_number_lengths: [5]
   },
   {
      alpha2: 'TW',
      alpha3: 'TWN',
      country_code: '886',
      country_name: 'Taiwan',
      mobile_begin_with: ['9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'TZ',
      alpha3: 'TZA',
      country_code: '255',
      country_name: 'Tanzania, United Republic of',
      mobile_begin_with: ['7', '6'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'UG',
      alpha3: 'UGA',
      country_code: '256',
      country_name: 'Uganda',
      mobile_begin_with: ['7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'UA',
      alpha3: 'UKR',
      country_code: '380',
      country_name: 'Ukraine',
      mobile_begin_with: ['39', '50', '63', '66', '67', '68', '73', '9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'UY',
      alpha3: 'URY',
      country_code: '598',
      country_name: 'Uruguay',
      mobile_begin_with: ['9'],
      phone_number_lengths: [8]
   },
   {
      alpha2: 'UZ',
      alpha3: 'UZB',
      country_code: '998',
      country_name: 'Uzbekistan',
      mobile_begin_with: ['9', '88', '33'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'VC',
      alpha3: 'VCT',
      country_code: '1',
      country_name: 'Saint Vincent And The Grenedines',
      mobile_begin_with: ['784'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'VE',
      alpha3: 'VEN',
      country_code: '58',
      country_name: 'Venezuela, Bolivarian Republic of',
      mobile_begin_with: ['4'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'VG',
      alpha3: 'VGB',
      country_code: '1',
      country_name: 'Virgin Islands, British',
      mobile_begin_with: ['284'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'VI',
      alpha3: 'VIR',
      country_code: '1',
      country_name: 'Virgin Islands, U.S.',
      mobile_begin_with: ['340'],
      phone_number_lengths: [10]
   },
   {
      alpha2: 'VN',
      alpha3: 'VNM',
      country_code: '84',
      country_name: 'Viet Nam',
      mobile_begin_with: ['8', '9', '3', '7', '5'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'VU',
      alpha3: 'VUT',
      country_code: '678',
      country_name: 'Vanuatu',
      mobile_begin_with: ['5', '7'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'WF',
      alpha3: 'WLF',
      country_code: '681',
      country_name: 'Wallis and Futuna',
      mobile_begin_with: [],
      phone_number_lengths: [6]
   },
   {
      alpha2: 'WS',
      alpha3: 'WSM',
      country_code: '685',
      country_name: 'Samoa',
      mobile_begin_with: ['7'],
      phone_number_lengths: [7]
   },
   {
      alpha2: 'YE',
      alpha3: 'YEM',
      country_code: '967',
      country_name: 'Yemen',
      mobile_begin_with: ['7'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'ZA',
      alpha3: 'ZAF',
      country_code: '27',
      country_name: 'South Africa',
      mobile_begin_with: ['1', '2', '3', '4', '5', '6', '7', '8'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'ZM',
      alpha3: 'ZMB',
      country_code: '260',
      country_name: 'Zambia',
      mobile_begin_with: ['9'],
      phone_number_lengths: [9]
   },
   {
      alpha2: 'ZW',
      alpha3: 'ZWE',
      country_code: '263',
      country_name: 'Zimbabwe',
      mobile_begin_with: ['71', '73', '77'],
      phone_number_lengths: [9]
   }
].sort((a, b) => (a.country_name > b.country_name) ? 1 : -1);

//export default COUNTRY_PHONE_DATA;


const NormalCountriesList = getCountries();

const NormalCountriesListRenamed = NormalCountriesList.map(country => {

  const found_other_country = COUNTRY_PHONE_DATA.find(c => c.alpha2.toLowerCase() === country.countryCode);

  if (!found_other_country) {
    console.log(`Country ${JSON.stringify(country)} not found in COUNTRY_PHONE_DATA`);
    return undefined;
  }

  return {
    alpha2: country.countryCode,
    country_code: country.dialCode,
    country_name: country.name,
    //mobile_begin_with: found_other_country ? found_other_country.mobile_begin_with : null,
    phone_number_lengths: found_other_country ? found_other_country.phone_number_lengths : null
  }
});

console.log("\n\n\n");
console.log("initial size",NormalCountriesListRenamed.length);


// filter out undefined
const filteredCountries = NormalCountriesListRenamed.filter(c => c !== undefined);
console.log("filtered size",filteredCountries.length);


//console.log(filteredCountries);

console.log("\n\n\nFinding duplicates");
// find filteredCountries that share the same country_code
const found_duplicates = filteredCountries.reduce((acc, curr) => {
  const found_duplicate = acc.find(c => c.country_code === curr.country_code);
  if (found_duplicate) {
    console.log(`Duplicate country_code ${JSON.stringify(curr)}`);
    return acc;
  }
  return [...acc, curr];
}
, []);
console.log("found_duplicates size",found_duplicates.length);


// remove the duplicates from filteredCountries
// so remove elements with the following aplha2s: 'do', 'pr', 'ca', 're', 'kz', 'sj', 'ax'
const filteredCountriesWithoutDuplicates = filteredCountries.filter(c => !['do', 'pr', 'ca', 're', 'kz', 'sj', 'ax'].includes(c.alpha2));

console.log("filteredCountriesWithoutDuplicates size",filteredCountriesWithoutDuplicates.length);

const finalSorted = filteredCountriesWithoutDuplicates.sort((a, b) => (a.country_name > b.country_name) ? 1 : -1);

// nodejs save filteredCountries to file
const pre_text = `
import { Country } from "./country.model";
const COUNTRY_PHONE_DATA:Country[]=
`;

const after_text = `
\nexport default COUNTRY_PHONE_DATA;
`;

const fs = require('fs');
fs.writeFileSync('./countries-merged-final.ts', pre_text+JSON.stringify(finalSorted)+after_text);



// function validatePhoneISO3166(phone, alpha3) {

//    console.log(phone, alpha3);

//    // if true won't validate landlines
//    const validateMobilePrefix = false;
//    const plusSign = true;

//    const countryPhoneDatum = COUNTRY_PHONE_DATA.find(c => c.alpha3 === alpha3);

//    console.log(countryPhoneDatum);

//    if (!countryPhoneDatum.phone_number_lengths) {
// 		return false;
// 	}

//    // remove the plus sign
//    phone = phone.replace(/\+/g, '');

// 	// remove country calling code from the phone number
// 	const phoneWithoutCountry = phone.replace(new RegExp('^' + countryPhoneDatum.country_code), '');

//    console.log('phone without country', phoneWithoutCountry);

// 	// if the phone number have +, countryPhoneDatum detected,
// 	// but the phone number does not have country calling code
// 	// then should consider the phone number as invalid
// 	if (plusSign && countryPhoneDatum && phoneWithoutCountry.length === phone.length) {
//       console.log(plusSign,!!countryPhoneDatum,phoneWithoutCountry,phone);
//       console.log('returning false');
// 		return false;
// 	}

// 	const phone_number_lengths = countryPhoneDatum.phone_number_lengths;
// 	const mobile_begin_with = countryPhoneDatum.mobile_begin_with;

// 	const isLengthValid = phone_number_lengths.some(length => phoneWithoutCountry.length === length);
// 	// some country doesn't have mobile_begin_with
// 	const isBeginWithValid = mobile_begin_with.length ?
// 		mobile_begin_with.some(beginWith => phoneWithoutCountry.match(new RegExp('^' + beginWith))):
// 		true;

//    console.log(isLengthValid, isBeginWithValid, validateMobilePrefix);   
//    console.log('final result is ',isLengthValid && (!validateMobilePrefix || isBeginWithValid));

// 	return isLengthValid && (!validateMobilePrefix || isBeginWithValid);
// }