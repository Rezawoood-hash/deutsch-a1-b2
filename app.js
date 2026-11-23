
const ALL_DATA={A1:[],A2:[],B1:[],B2:[]};



const LEVEL_ORDER=['A1','A2','B1','B2'];
const ACTIVE_LVL_KEY='de_hub_active_level_v3';
const GLOBAL_THEME_KEY='de_hub_theme_v3';

const LEVEL_CONFIG={
  A1:{
    code:'A1',
    topTitle:'Babalulue · A1 (Starten Wir)',
    topSubEss:'بستهٔ اصلی (Starten Wir A1 + Goethe A1)',
    topSubAll:'مجموعهٔ کامل (Starten Wir A1 + Goethe + telc + ECL)',
    secLessonsTitle:'📖 ۱۲ درس Starten Wir! A1',
    secLessonsSub:'برای مطالعه یا مرور لمس کن',
    themeColorLight:'#0f5257',
    prefKey:'de_a1_phase2_prefs',
    progKey:'de_a1_progress_v1',
    statKey:'de_a1_stats_v1',
    appId:'A1_Deutsch_StartenWir',
    backupPrefix:'A1_Deutsch_Backup',
    b2BtnLabel:'B2',
    extraSettingTitle:'نمایش واژگان تکمیلی telc و ECL (سطح A1)',
    extraSettingDesc:'اضافه کردن ۵۴۵ واژهٔ جانبی telc A1 و پل ECL به درس‌ها، مرور و جست‌وجو',
    dlEssLabel:'📥 دانلود بستهٔ اصلی A1 (~۲۷ MB)',
    dlAllLabel:'📦 دانلود کل A1 (~۴۰ MB)',
    batchEssTitle:'بستهٔ اصلی A1 (Starten Wir + Goethe)',
    batchAllTitle:'کل مجموعهٔ A1 (شامل telc و ECL)',
    batchVerbsTitle:'فعل‌های آلمانی A1',
    defaultPrefs:{ includeExtra:false, showNotes:false, showB2Grammar:false },
    primaryExtra:{
      pk:'goethe',
      ico:'🇩🇪',
      secTitle:'🎯 تکمیلی رسمی آزمون A1',
      secSub:'بستن کامل حفرهٔ Goethe A1',
      title:'۱۹۲ واژهٔ رسمی Goethe A1 (غایب در کتاب)',
      descPrefix:'۴۷ فعل کلیدی و ۸۹ اسم ضروری',
      detailTitle:'تکمیلی رسمی Goethe A1',
      detailSub:'۱۹۲ واژهٔ ضروری غایب در Starten Wir',
      tagLabel:'Goethe A1',
      tagClass:'tag-goethe',
      deckLabel:'🇩🇪 ۱۹۲ واژهٔ رسمی Goethe A1',
      batchTitle:'۱۹۲ واژهٔ Goethe A1'
    },
    optionalExtras:[
      {
        pk:'telc',
        ico:'📘',
        titlePrefix:'واژگان اختصاصی telc A1',
        descPrefix:'تکمیلی Einfach gut! A1',
        detailTitle:'واژگان اختصاصی telc A1',
        detailSub:'تکمیلی Einfach gut! A1',
        tagLabel:'telc A1',
        deckLabel:'📘 تکمیلی telc A1',
        batchTitle:'تکمیلی telc A1'
      },
      {
        pk:'ecl',
        ico:'🌉',
        titlePrefix:'پل تدوینی ECL A1→A2',
        descPrefix:'واژگان و عبارات گذار به A2',
        detailTitle:'پل تدوینی ECL A1→A2',
        detailSub:'واژگان و عبارات گذار به A2',
        tagLabel:'ECL A1→A2',
        deckLabel:'🌉 پل ECL A1→A2',
        batchTitle:'پل ECL A1→A2'
      }
    ],
    lessons:[
  {pk:'L1', num:'۱', title:'آشنایی و معرفی', sub:'احوال‌پرسی، کشورها، زبان‌ها و اعداد ۰–۱۰'},
  {pk:'L2', num:'۲', title:'خانواده و مشاغل', sub:'اعضای خانواده، سن، شغل‌ها و اعداد تا ۱۰۰'},
  {pk:'L3', num:'۳', title:'خوراکی و خرید', sub:'غذا، نوشیدنی، قیمت، رنگ‌ها و وعده‌ها'},
  {pk:'L4', num:'۴', title:'کار، دفتر و ساعت', sub:'محل کار، ساعت‌گویی، افعال جداشدنی'},
  {pk:'L5', num:'۵', title:'روزهای هفته و اوقات فراغت', sub:'ماه‌ها، ورزش‌ها، سرگرمی و زمان‌بندی'},
  {pk:'L6', num:'۶', title:'خانه و شهر', sub:'اتاق‌ها، وسایل منزل، آدرس‌دهی و مکان‌ها'},
  {pk:'L7', num:'۷', title:'آب‌وهوا و زندگی‌نامه', sub:'دما، جهت‌ها، تولد، تحصیل و سفر'},
  {pk:'L8', num:'۸', title:'مسیر و حمل‌ونقل', sub:'قطار، مترو، حرکت/ورود و گشت شهری'},
  {pk:'L9', num:'۹', title:'قرار، کافه و خرید', sub:'سفارش دادن، بازار دست‌دوم و دعوت‌ها'},
  {pk:'L10', num:'۱۰', title:'سفر و تعطیلات', sub:'فصل‌ها، هتل، ساحل، کوه و طبیعت'},
  {pk:'L11', num:'۱۱', title:'سلامتی و ورزش', sub:'اعضای بدن، پزشک، بیماری و تمرین'},
  {pk:'L12', num:'۱۲', title:'شغل رؤیایی و ایمیل', sub:'حرفه‌های متنوع، محل کار و مکاتبه'}
]
  },
  A2:{
    code:'A2',
    topTitle:'Babalulue · A2 (Starten Wir)',
    topSubEss:'بستهٔ اصلی (Starten Wir A2 + Goethe A2)',
    topSubAll:'مجموعهٔ کامل (Starten Wir A2 + Goethe + telc)',
    secLessonsTitle:'📖 ۱۲ درس Starten Wir! A2',
    secLessonsSub:'برای مطالعه یا مرور لمس کن',
    themeColorLight:'#1e40af',
    prefKey:'de_a2_v2_prefs',
    progKey:'de_a2_progress_v1',
    statKey:'de_a2_stats_v1',
    appId:'A2_Deutsch_StartenWir',
    backupPrefix:'A2_Deutsch_Backup',
    b2BtnLabel:'B2',
    extraSettingTitle:'نمایش واژگان تکمیلی telc A2',
    extraSettingDesc:'اضافه کردن ۷۰۲ واژهٔ تکمیلی Einfach gut! A2 به درس‌ها، مرور و جست‌وجو',
    dlEssLabel:'📥 دانلود بستهٔ اصلی A2 (~۲۷ MB)',
    dlAllLabel:'📦 دانلود کل A2 (~۴۲ MB)',
    batchEssTitle:'بستهٔ اصلی A2 (Starten Wir + Goethe)',
    batchAllTitle:'کل مجموعهٔ A2 (شامل telc A2)',
    batchVerbsTitle:'فعل‌های آلمانی A2',
    defaultPrefs:{ includeExtra:false, showNotes:false, showB2Grammar:false },
    primaryExtra:{
      pk:'goethe',
      ico:'🇩🇪',
      secTitle:'🎯 تکمیلی رسمی آزمون A2',
      secSub:'فقط واژگان جدید A2 (حذف تکراری‌های A1 و ۱۲ درس)',
      title:'۳۰۱ واژهٔ خالص Goethe A2 (غایب در کتاب و A1)',
      descPrefix:'۶۸ فعل کلیدی و ۱۴۱ اسم ضروری',
      detailTitle:'تکمیلی خالص Goethe A2',
      detailSub:'۳۰۱ واژهٔ جدید A2 (بدون تکراری‌های A1 و ۱۲ درس کتاب)',
      tagLabel:'Goethe A2',
      tagClass:'tag-goethe',
      deckLabel:'🇩🇪 ۳۰۱ واژهٔ خالص Goethe A2',
      batchTitle:'۳۰۱ واژهٔ خالص Goethe A2'
    },
    optionalExtras:[
      {
        pk:'telc',
        ico:'📘',
        titlePrefix:'واژگان اختصاصی telc A2',
        descPrefix:'تکمیلی Einfach gut! A2',
        detailTitle:'واژگان اختصاصی telc A2',
        detailSub:'تکمیلی رسمی Einfach gut! A2',
        tagLabel:'telc A2',
        deckLabel:'📘 تکمیلی telc A2',
        batchTitle:'تکمیلی telc A2'
      }
    ],
    lessons:[
  {pk:'L1', num:'۱', title:'آشنایی، ریشه‌ها و زبان', sub:'معرفی، کشورها، کارآموزی، روزهای تکراری و weil'},
  {pk:'L2', num:'۲', title:'پوشاک، مد و ظاهر', sub:'لباس، رنگ، سایز، مقایسهٔ صفات و توصیف افراد'},
  {pk:'L3', num:'۳', title:'خانواده، شخصیت و دوستان', sub:'خویشاوندان، انواع خانواده، صفات اخلاقی و اینترنت'},
  {pk:'L4', num:'۴', title:'مسکن و معاوضهٔ خانه', sub:'اجاره، اتاق‌ها، وسایل آشپزخانه و حروف اضافهٔ دووجهی'},
  {pk:'L5', num:'۵', title:'خوراکی، رستوران و آشپزی', sub:'سفارش مؤدبانه، صورتحساب، تفکیک زباله و دستور پخت'},
  {pk:'L6', num:'۶', title:'شهر، هنر، فیلم و احساسات', sub:'هنر خیابانی، قرار ملاقات، افعال بازتابی و سینما'},
  {pk:'L7', num:'۷', title:'تحصیل، شغل و درخواست کار', sub:'دانشگاه، دورکاری، درس‌های مدرسه و نگارش Bewerbung'},
  {pk:'L8', num:'۸', title:'سلامتی، بدن و مطب پزشک', sub:'اعضا، بیماری، ورزش، تغذیه و wenn / dass / deshalb'},
  {pk:'L9', num:'۹', title:'رسانه، تلویزیون و مهمانی', sub:'برنامه‌ها، استریم، تبریک جشن‌ها و تعارفات مؤدبانه'},
  {pk:'L10', num:'۱۰', title:'مرکز خرید و خدمات روزمره', sub:'فروشگاه، تعمیرات، ساختار lassen و توصیف اشیا'},
  {pk:'L11', num:'۱۱', title:'بانک، پول، پست و همکاری', sub:'حساب بانکی، بودجه، آنلاین‌بانکینگ و ارسال مرسوله'},
  {pk:'L12', num:'۱۲', title:'چمدان، سفر و تعطیلات', sub:'لوازم سفر، برنامه‌ریزی تعطیلات، هتل و پرسش با ob'}
]
  },
  B1:{
    code:'B1',
    topTitle:'Babalulue · B1 (Starten Wir)',
    topSubEss:'بستهٔ اصلی (Starten Wir B1 + Goethe B1)',
    topSubAll:'مجموعهٔ کامل (Starten Wir B1 + Goethe + telc)',
    secLessonsTitle:'📖 ۱۲ درس Starten Wir! B1',
    secLessonsSub:'برای مطالعه یا مرور لمس کن',
    themeColorLight:'#6d28d9',
    prefKey:'de_b1_v2_prefs',
    progKey:'de_b1_progress_v1',
    statKey:'de_b1_stats_v1',
    appId:'B1_Deutsch_StartenWir',
    backupPrefix:'B1_Deutsch_Backup',
    b2BtnLabel:'B2',
    extraSettingTitle:'نمایش واژگان تکمیلی telc B1',
    extraSettingDesc:'اضافه کردن ۵۸۵ واژهٔ تکمیلی Einfach gut! B1 به درس‌ها، مرور و جست‌وجو',
    dlEssLabel:'📥 دانلود بستهٔ اصلی B1 (~۲۸ MB)',
    dlAllLabel:'📦 دانلود کل B1 (~۴۰ MB)',
    batchEssTitle:'بستهٔ اصلی B1 (Starten Wir + Goethe)',
    batchAllTitle:'کل مجموعهٔ B1 (شامل telc B1)',
    batchVerbsTitle:'فعل‌های آلمانی B1',
    defaultPrefs:{ includeExtra:false, showNotes:false, showB2Grammar:false },
    primaryExtra:{
      pk:'goethe',
      ico:'🇩🇪',
      secTitle:'🎯 تکمیلی رسمی آزمون B1',
      secSub:'فقط واژگان جدید B1 (حذف تکراری‌های A1، A2 و ۱۲ درس)',
      title:'۵۸۴ واژهٔ خالص Goethe B1 (غایب در کتاب، A1 و A2)',
      descPrefix:'۱۵۵ فعل کلیدی و ۳۴۷ اسم ضروری',
      detailTitle:'تکمیلی خالص Goethe B1',
      detailSub:'۵۸۴ واژهٔ جدید B1 (بدون تکراری‌های A1، A2 و ۱۲ درس کتاب)',
      tagLabel:'Goethe B1',
      tagClass:'tag-goethe',
      deckLabel:'🇩🇪 ۵۸۴ واژهٔ خالص Goethe B1',
      batchTitle:'۵۸۴ واژهٔ خالص Goethe B1'
    },
    optionalExtras:[
      {
        pk:'telc',
        ico:'📘',
        titlePrefix:'واژگان اختصاصی telc B1',
        descPrefix:'تکمیلی Einfach gut! B1',
        detailTitle:'واژگان اختصاصی telc B1',
        detailSub:'تکمیلی رسمی Einfach gut! B1',
        tagLabel:'telc B1',
        deckLabel:'📘 تکمیلی telc B1',
        batchTitle:'تکمیلی telc B1'
      }
    ],
    lessons:[
  {pk:'L1', num:'۱', title:'زبان‌ها، آشنایی و چندزبانگی', sub:'مقدمه‌چینی، زبان‌های جهان، مزایای چندزبانگی و جملات هدف'},
  {pk:'L2', num:'۲', title:'سریال، تلویزیون و آیندهٔ رسانه', sub:'استریم، روابط و تعارض، obwohl، je...desto و پیش‌بینی آینده'},
  {pk:'L3', num:'۳', title:'استاندارد زیبایی، مد و شخصیت', sub:'تصویر بدنی، پیش‌داوری‌ها، حرف اضافهٔ trotz و توصیف افراد'},
  {pk:'L4', num:'۴', title:'آب‌وهوا، ورزش‌های هیجانی و اورژانس', sub:'پدیده‌های جوی، پارکور، ورزش فراگیر، um...zu و کار امدادی'},
  {pk:'L5', num:'۵', title:'مشاغل، کارآموزی و محیط کار', sub:'حیوانات و مشاغل خاص، درخواست کار، sowohl...als auch و جوّ کاری'},
  {pk:'L6', num:'۶', title:'مسکن مدرن، شهر و آیندهٔ زندگی', sub:'تراکم‌سازی شهری، ربات‌ها، سبک دکوراسیون، sodass و ارائهٔ B1'},
  {pk:'L7', num:'۷', title:'قوی در زندگی و محیط زیست', sub:'مددکاری اجتماعی، قهرمانان روزمره، پایداری، weder...noch و indem'},
  {pk:'L8', num:'۸', title:'فرصت‌ها و خطرات فناوری', sub:'سایلنت‌پارتی، پهپادها، روزنامه‌نگاری، zwar...aber و als ob'},
  {pk:'L9', num:'۹', title:'سفر، امداد خودرو و گردشگری', sub:'مسیر یاکوب، خرابی خودرو، گردشگری انبوه و einerseits...andererseits'},
  {pk:'L10', num:'۱۰', title:'ارتباطات، اپلیکیشن‌ها و رسانه‌ها', sub:'اپ ورزشی، اعتیاد به اینترنت، ویدئوبلاگ و ohne...zu / ohne dass'},
  {pk:'L11', num:'۱۱', title:'انجمن‌ها، کتاب و خودانتشاری', sub:'ورزش تیمی، تأمین مالی جمعی، کتابخانه، nachdem و anstatt...zu'},
  {pk:'L12', num:'۱۲', title:'دوستان صمیمی، مدرسه و استارتاپ', sub:'خاطرات، نظام آموزشی آلمان، کارآفرینی، falls، derselbe و haben/sein...zu'}
]
  },
  B2:{
    code:'B2',
    topTitle:'Babalulue · B2 (Sicher! B2)',
    topSubEss:'بستهٔ اصلی (Sicher! B2 + Grammatik aktiv B2–C1)',
    topSubAll:'مجموعهٔ کامل (Sicher! B2 + Grammatik aktiv + telc Beruf)',
    secLessonsTitle:'📖 ۱۲ درس Sicher! B2.1 + B2.2',
    secLessonsSub:'۷۷۶ واژهٔ خالص جدید (حذف کامل تکراری‌های A1 تا B1)',
    themeColorLight:'#b45309',
    prefKey:'de_b2_v2_prefs',
    progKey:'de_b2_progress_v1',
    statKey:'de_b2_stats_v1',
    appId:'B2_Deutsch_SicherB2',
    backupPrefix:'B2_Deutsch_Backup',
    b2BtnLabel:'B2+',
    extraSettingTitle:'نمایش بستهٔ شغلی telc B2 Beruf',
    extraSettingDesc:'اضافه کردن ۲۶۵ واژهٔ شغلی Einfach besser! 500 به درس‌ها، مرور و جست‌وجو (پیش‌فرض روشن)',
    dlEssLabel:'📥 دانلود بستهٔ اصلی B2 (~۲۰ MB)',
    dlAllLabel:'📦 دانلود کل B2 (~۲۶ MB)',
    batchEssTitle:'بستهٔ اصلی B2 (Sicher! B2 + Grammatik aktiv)',
    batchAllTitle:'کل مجموعهٔ B2 (شامل telc B2 Beruf)',
    batchVerbsTitle:'فعل‌ها و ساختارهای FVG (B2)',
    defaultPrefs:{ includeExtra:true, showNotes:true, showB2Grammar:true },
    primaryExtra:{
      pk:'gram',
      ico:'🏛️',
      secTitle:'🎯 بسته‌های تکمیلی آزمونی و حرفه‌ای B2',
      secSub:'صفر تکرار با ۵٬۷۴۷ مدخل A1–B1 و ۱۲ درس کتاب',
      title:'بستهٔ طلایی Grammatik aktiv B2–C1 (۱۵۰ ساختار)',
      descPrefix:'ساختارهای اسم-فعل (FVG)، حروف اضافهٔ Genitiv/Dativ و افعال رسمی',
      detailTitle:'بستهٔ طلایی Grammatik aktiv B2–C1',
      detailSub:'۱۵۰ ساختار کلیدی اسم-فعل (FVG)، حروف اضافهٔ پیشرفته و افعال Genitiv/Dativ',
      tagLabel:'Grammatik B2–C1',
      tagClass:'tag-gram',
      deckLabel:'🏛️ ۱۵۰ ساختار Grammatik aktiv B2–C1',
      batchTitle:'۱۵۰ ساختار طلایی Grammatik aktiv B2–C1'
    },
    optionalExtras:[
      {
        pk:'telc',
        ico:'💼',
        titlePrefix:'بستهٔ شغلی telc B2 Beruf',
        descPrefix:'تکمیلی Einfach besser! 500 (کار، قرارداد، ایمنی، فنی و فیش حقوقی)',
        detailTitle:'بستهٔ شغلی telc B2 Beruf',
        detailSub:'۲۶۵ واژهٔ اختصاصی Einfach besser! 500 (محیط کار، قرارداد، ایمنی و بازرگانی)',
        tagLabel:'telc B2 Beruf',
        deckLabel:'💼 بستهٔ شغلی telc B2 Beruf',
        batchTitle:'تکمیلی شغلی telc B2 Beruf'
      }
    ],
    lessons:[
  {pk:'L1', num:'۱', title:'دوستی، ارتباطات و شخصیت', sub:'روابط انسانی، شبکه‌های اجتماعی، صفات شخصیتی و ساختارهای معرفی'},
  {pk:'L2', num:'۲', title:'محیط کار، شرکت و مذاکره', sub:'فضای کاری، مذاکره، حقوق کار، اخراج و حروف ربط علّی و پیرو'},
  {pk:'L3', num:'۳', title:'دنیای رسانه، کتاب و سینما', sub:'کتاب، روزنامه، سینما، نقد رسانه‌ای و تفاوت‌های سبکی'},
  {pk:'L4', num:'۴', title:'آیندهٔ شغلی و مسیر پس از مدرسه', sub:'سال فاصله، کار داوطلبانه، هدایت شغلی و قیود با پسوند -weise'},
  {pk:'L5', num:'۵', title:'تناسب اندام، ورزش و زیبایی', sub:'زیبایی، ورزش و انعطاف، اصطلاحات بدنی و مهارت استدلال'},
  {pk:'L6', num:'۶', title:'زندگی شهری، معماری و گردشگری', sub:'معماری، زیرساخت شهری، گردشگری، بازسازی محله‌ها و توصیف مکان'},
  {pk:'L7', num:'۷', title:'خانوادهٔ مدرن و روابط عاطفی', sub:'اشکال مدرن خانواده، توصیف نمودار و آمار، روابط میان‌فرهنگی و موضع‌گیری'},
  {pk:'L8', num:'۸', title:'تغذیهٔ سالم و عادت‌های غذایی', sub:'رژیم‌های غذایی، اسراف مواد غذایی، شکایت مشتری و ساختارهای laut و zufolge'},
  {pk:'L9', num:'۹', title:'زندگی دانشجویی و فضای دانشگاه', sub:'تجربهٔ دانشجویی، سمینار و پایان‌نامه، تأمین مالی و ساختارهای آکادمیک'},
  {pk:'L10', num:'۱۰', title:'خدمات نوین، تبلیغات و کار داوطلبانه', sub:'خدمات روزمره، فعالیت داوطلبانه، دنیای تبلیغات و صفات با پسوند -bar'},
  {pk:'L11', num:'۱۱', title:'سلامتی، پزشکی و درمان', sub:'پزشکی و طب جایگزین، داروخانهٔ سفر، توصیف انواع درد و ابراز نظر'},
  {pk:'L12', num:'۱۲', title:'زبان، گویش‌ها و تنوع منطقه‌ای', sub:'گویش‌ها، چندزبانگی، واژگان اتریشی و سوئیسی و ساختارهای بحث'}
]
  }
};

const DE_COLLATOR=(typeof Intl!=='undefined' && Intl.Collator)?new Intl.Collator('de', {sensitivity:'base'}):null;
function cmpDe(a, b){ return DE_COLLATOR?DE_COLLATOR.compare(a, b):String(a).localeCompare(String(b), 'de'); }

const ID_INDEX=new Map();
const GLOBAL_UNIQUE_LIST=[];
const LEVEL_RANK={A1:0, A2:1, B1:2, B2:3};
const PACK_CACHE={A1:{}, A2:{}, B1:{}, B2:{}};
const SCOPED_CACHE={};
const VERBS_CACHE={};
const LEVEL_SUM_CACHE={};
let _globalSorted=false;

const LEVEL_LOADED={A1:false, A2:false, B1:false, B2:false};
const LEVEL_PROMISES={};

function allLevelsLoaded(){
  return LEVEL_ORDER.every(l=>LEVEL_LOADED[l]);
}

async function fetchGzipJson(url){
  const res=await fetch(url);
  if(!res.ok) throw new Error('HTTP '+res.status+' for '+url);
  const buf=await res.arrayBuffer();
  const u8=new Uint8Array(buf);
  if(u8.length>=2 && u8[0]===0x1f && u8[1]===0x8b){
    if(typeof DecompressionStream==='undefined'){
      throw new Error('DecompressionStream unsupported');
    }
    const stream=new Blob([u8]).stream().pipeThrough(new DecompressionStream('gzip'));
    return await new Response(stream).json();
  }
  return JSON.parse(new TextDecoder('utf-8').decode(u8));
}

async function ensureLevelLoaded(lvl){
  if(!LEVEL_ORDER.includes(lvl)) lvl='A1';
  if(LEVEL_LOADED[lvl]) return ALL_DATA[lvl];
  if(LEVEL_PROMISES[lvl]) return LEVEL_PROMISES[lvl];
  LEVEL_PROMISES[lvl]=(async ()=>{
    const unpacked=await fetchGzipJson(`./data-${lvl.toLowerCase()}.bin`);
    const keys=unpacked.K, rows=unpacked.R;
    const list=new Array(rows.length);
    for(let i=0;i<rows.length;i++){
      const r=rows[i];
      const obj={};
      for(let j=0;j<r.length;j++){
        const v=r[j];
        if(v!==null && v!==undefined) obj[keys[j]]=v;
      }
      obj._lvl=lvl;
      obj._pkk=`${obj.lm}|${obj.k}|${obj.a||''}`;
      list[i]=obj;
      ID_INDEX.set(obj.id, {item:obj, lvl});
      if(obj.uq) GLOBAL_UNIQUE_LIST.push(obj);
    }
    ALL_DATA[lvl]=list;
    LEVEL_LOADED[lvl]=true;
    _globalSorted=false;
    if(lvl===activeLevel) DATA=ALL_DATA[lvl];
    return list;
  })();
  try{
    return await LEVEL_PROMISES[lvl];
  }catch(err){
    delete LEVEL_PROMISES[lvl];
    throw err;
  }
}

async function ensureAllLevelsLoaded(){
  await Promise.all(LEVEL_ORDER.map(l=>ensureLevelLoaded(l)));
  return ALL_DATA;
}

function hydrateRemainingLevels(){
  const pending=LEVEL_ORDER.filter(l=>!LEVEL_LOADED[l]);
  let idx=0;
  function step(){
    if(idx>=pending.length) return;
    const lvl=pending[idx++];
    if(LEVEL_LOADED[lvl]){ step(); return; }
    ensureLevelLoaded(lvl).then(()=>{
      renderLevelBar(lvl);
      if(state.tab==='search' && state.searchScope==='all') renderSearchTab();
      setTimeout(step, 90);
    }).catch(()=>{});
  }
  setTimeout(step, 180);
}

function ensureGlobalSorted(){
  if(_globalSorted) return GLOBAL_UNIQUE_LIST;
  GLOBAL_UNIQUE_LIST.sort((a,b)=>{
    const c=cmpDe(getCleanHw(a), getCleanHw(b));
    return c!==0?c:(LEVEL_RANK[a._lvl]-LEVEL_RANK[b._lvl]);
  });
  _globalSorted=true;
  return GLOBAL_UNIQUE_LIST;
}

function getLevelCfg(lvl=activeLevel){ return LEVEL_CONFIG[lvl] || LEVEL_CONFIG.A1; }
function getPackTagHtml(x, lvl=activeLevel){
  const cfg=getLevelCfg(lvl);
  if(x.pk && x.pk.startsWith('L')) return `<span class="tag tag-les">درس ${faNum(x.ls)}</span>`;
  if(x.pk===cfg.primaryExtra.pk) return `<span class="tag ${cfg.primaryExtra.tagClass}">${cfg.primaryExtra.tagLabel}</span>`;
  const opt=cfg.optionalExtras.find(o=>o.pk===x.pk);
  if(opt) return `<span class="tag">${opt.tagLabel}</span>`;
  return `<span class="tag">${esc(x.pk||lvl)}</span>`;
}

// =========================================================
// PERSISTENT PREFERENCES, LEITNER PROGRESS & STREAK (PER LEVEL)
// =========================================================
const DAY_MS=86400000;
const BOX_DAYS={1:1, 2:3, 3:7, 4:14, 5:30};

function safeJsonParse(k, fb){
  try{ const v=localStorage.getItem(k); return v?JSON.parse(v):fb; }catch(e){ return fb; }
}

let activeLevel=(()=>{
  try{
    const urlLvl=(new URLSearchParams(location.search).get('level')||'').toUpperCase();
    if(LEVEL_ORDER.includes(urlLvl)) return urlLvl;
  }catch(e){}
  const saved=(localStorage.getItem(ACTIVE_LVL_KEY)||'A1').toUpperCase();
  return LEVEL_ORDER.includes(saved)?saved:'A1';
})();

let DATA=ALL_DATA[activeLevel];
let LESSON_META=LEVEL_CONFIG[activeLevel].lessons;
let PREF_KEY=LEVEL_CONFIG[activeLevel].prefKey;
let PROG_KEY=LEVEL_CONFIG[activeLevel].progKey;
let STAT_KEY=LEVEL_CONFIG[activeLevel].statKey;
let prefs={};
let progress={};
let stats={};

function loadLevelContext(lvl){
  activeLevel=LEVEL_ORDER.includes(lvl)?lvl:'A1';
  const cfg=LEVEL_CONFIG[activeLevel];
  DATA=ALL_DATA[activeLevel];
  LESSON_META=cfg.lessons;
  PREF_KEY=cfg.prefKey;
  PROG_KEY=cfg.progKey;
  STAT_KEY=cfg.statKey;

  const savedTheme=localStorage.getItem(GLOBAL_THEME_KEY)||'dark';
  const storedPrefs=safeJsonParse(PREF_KEY, {});
  prefs=Object.assign({
    theme:savedTheme,
    includeExtra:cfg.defaultPrefs.includeExtra,
    audioMode:'human_first',
    showExtLinks:true,
    showNotes:cfg.defaultPrefs.showNotes,
    showB2Grammar:cfg.defaultPrefs.showB2Grammar,
    hoverMode:false,
    fcAutoAudio:true,
    fcHideArticle:false,
    studyLayout:'cards',
    verbLayout:'list',
    cardAutoAudio:true,
    packIdx:{}
  }, storedPrefs);
  prefs.theme=savedTheme;

  progress=safeJsonParse(PROG_KEY, {});
  stats=Object.assign({
    todayDate:'',
    todayCount:0,
    streak:0,
    lastActiveDate:''
  }, safeJsonParse(STAT_KEY, {}));

  try{ localStorage.setItem(ACTIVE_LVL_KEY, activeLevel); }catch(e){}
  document.documentElement.setAttribute('data-level', activeLevel);
}
loadLevelContext(activeLevel);

function savePrefs(){ try{ localStorage.setItem(PREF_KEY, JSON.stringify(prefs)); }catch(e){} }
function saveProgress(){ try{ localStorage.setItem(PROG_KEY, JSON.stringify(progress)); }catch(e){} renderLevelBar(activeLevel); }
function saveStats(){ try{ localStorage.setItem(STAT_KEY, JSON.stringify(stats)); }catch(e){} }

function calcLevelSummary(lvl){
  if(!LEVEL_LOADED[lvl]) return {total:0, mastered:0, due:0, pct:null};
  const cfg=LEVEL_CONFIG[lvl];
  const arr=ALL_DATA[lvl];
  const pr=(lvl===activeLevel)?progress:safeJsonParse(cfg.progKey, {});
  const pf=(lvl===activeLevel)?prefs:Object.assign({}, cfg.defaultPrefs, safeJsonParse(cfg.prefKey, {}));
  const incExtra=!!pf.includeExtra;
  const now=Date.now();
  let total=0, mastered=0, due=0;
  for(let i=0;i<arr.length;i++){
    const x=arr[i];
    if(!x.uq || (!incExtra && !x.ess)) continue;
    total++;
    const p=pr[x._pkk];
    if(p){
      if(p.box>=4) mastered++;
      if(p.box<5 && (p.next||0)<=now) due++;
    }
  }
  const pct=total?Math.round((mastered/total)*100):0;
  const res={total, mastered, due, pct};
  LEVEL_SUM_CACHE[lvl]=res;
  return res;
}

function renderLevelBar(onlyLvl=null){
  const targets=onlyLvl?[onlyLvl]:LEVEL_ORDER;
  LEVEL_ORDER.forEach(lvl=>{
    const btn=document.querySelector(`#levelBar .lvl-pill[data-lvl="${lvl}"]`);
    if(btn) btn.classList.toggle('active', lvl===activeLevel);
  });
  targets.forEach(lvl=>{
    const s=calcLevelSummary(lvl);
    const pe=document.getElementById('lvlPct'+lvl);
    if(pe) pe.textContent=(s.pct===null)?'…':`${faNum(s.pct)}٪`;
    const de=document.getElementById('lvlDot'+lvl);
    if(de) de.classList.toggle('show', s.due>0);
  });
}

async function switchLevel(lvl){
  if(!LEVEL_ORDER.includes(lvl)) return;
  if(!LEVEL_LOADED[lvl]){
    await ensureLevelLoaded(lvl);
  }
  if(lvl===activeLevel){
    if(state.activePack || state.activeWordId || state.session){
      stopAudio();
      state.activePack=null;
      state.activeWordId=null;
      state.session=null;
      clearHashSafely();
      renderApp();
      window.scrollTo({top:0, behavior:'instant'});
    }
    return;
  }
  stopAudio();
  savePrefs();
  loadLevelContext(lvl);
  state.activePack=null;
  state.activeWordId=null;
  state.packFilter='all';
  state.onlyUnmastered=false;
  state.verbFilter='all';
  state.verbQuery='';
  state.verbIdx=0;
  state.scDone=false;
  state.scAnim='';
  state.searchQuery='';
  state.searchKind='all';
  state.searchAlpha='';
  state.limit=45;
  state.revMode='standard';
  state.revDeck='smart';
  state.session=null;
  clearHashSafely();
  const av=document.getElementById('appView');
  if(av) av.innerHTML='';
  setTheme(prefs.theme);
  sanitizeB2State();
  syncB2Buttons();
  updateDueBadge();
  renderLevelBar(activeLevel);
  renderApp();
  window.scrollTo({top:0, behavior:'instant'});
  const cfg=getLevelCfg();
  showToast(cfg.topTitle, `🎯 سطح ${lvl}`, 't-human', 1600);
}


function todayKey(){
  const d=new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function yesterdayKey(){
  const d=new Date(Date.now()-DAY_MS);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function recordStudyActivity(){
  const tk=todayKey(), yk=yesterdayKey();
  if(stats.todayDate!==tk){
    stats.todayDate=tk;
    stats.todayCount=0;
  }
  stats.todayCount=(stats.todayCount||0)+1;
  if(stats.lastActiveDate!==tk){
    if(stats.lastActiveDate===yk) stats.streak=(stats.streak||0)+1;
    else stats.streak=1;
    stats.lastActiveDate=tk;
  }
  saveStats();
}
function getDisplayStreak(){
  const tk=todayKey(), yk=yesterdayKey();
  if(stats.lastActiveDate===tk || stats.lastActiveDate===yk) return stats.streak||0;
  return 0;
}
function getTodayCount(){
  return stats.todayDate===todayKey()?(stats.todayCount||0):0;
}

// Canonical progress key (0 collisions across unique records + auto-syncs multi-lesson recurrences)
function progKey(x){ return x._pkk || (x._pkk=`${x.lm}|${x.k}|${x.a||''}`); }
function getEntry(x){ return progress[progKey(x)]||null; }
function isMastered(x){ const p=getEntry(x); return !!(p && p.box>=4); }
function isLearned(x){ const p=getEntry(x); return !!(p && p.box>=2); }
function isDue(x, now=Date.now()){
  const p=getEntry(x);
  return !!(p && p.box>=1 && p.box<5 && (p.next||0)<=now);
}

function getEntryForLevel(x, lvl=activeLevel){
  if(!lvl || lvl===activeLevel) return getEntry(x);
  const cfg=getLevelCfg(lvl);
  const pr=safeJsonParse(cfg.progKey, {});
  return pr[progKey(x)]||null;
}

function updateItemProgressForLevel(x, grade, lvl=activeLevel){
  if(!lvl || lvl===activeLevel) return updateItemProgress(x, grade);
  const cfg=getLevelCfg(lvl);
  const pr=safeJsonParse(cfg.progKey, {});
  const k=progKey(x);
  const now=Date.now();
  const cur=pr[k]||{box:0, reps:0, hard:0, next:0, ts:0};
  let newBox=cur.box;
  let nextDue=now;
  if(grade==='again'){
    newBox=1;
    nextDue=now;
    cur.hard=(cur.hard||0)+1;
  }else if(grade==='easy'){
    newBox=5;
    nextDue=now + BOX_DAYS[5]*DAY_MS;
  }else{
    newBox=Math.min(5, Math.max(2, (cur.box||0)+1));
    nextDue=now + (BOX_DAYS[newBox]||7)*DAY_MS;
  }
  pr[k]={box:newBox, reps:(cur.reps||0)+1, hard:cur.hard||0, next:nextDue, ts:now};
  try{ localStorage.setItem(cfg.progKey, JSON.stringify(pr)); }catch(e){}
  // Record activity on target level stats as well
  const st=Object.assign({todayDate:'', todayCount:0, streak:0, lastActiveDate:''}, safeJsonParse(cfg.statKey, {}));
  const tk=todayKey(), yk=yesterdayKey();
  if(st.todayDate!==tk){ st.todayDate=tk; st.todayCount=0; }
  st.todayCount=(st.todayCount||0)+1;
  if(st.lastActiveDate!==tk){
    st.streak=(st.lastActiveDate===yk)?((st.streak||0)+1):1;
    st.lastActiveDate=tk;
  }
  try{ localStorage.setItem(cfg.statKey, JSON.stringify(st)); }catch(e){}
  renderLevelBar(lvl);
  return pr[k];
}

function updateItemProgress(x, grade){
  // grade: 'again' (Box 1, due now) | 'good' (promote +1) | 'easy' (straight to Box 5 Mastered)
  const k=progKey(x);
  const now=Date.now();
  const cur=progress[k]||{box:0, reps:0, hard:0, next:0, ts:0};
  let newBox=cur.box;
  let nextDue=now;
  if(grade==='again'){
    newBox=1;
    nextDue=now; // due immediately
    cur.hard=(cur.hard||0)+1;
  }else if(grade==='easy'){
    newBox=5;
    nextDue=now + BOX_DAYS[5]*DAY_MS;
  }else{
    newBox=Math.min(5, Math.max(2, (cur.box||0)+1));
    nextDue=now + (BOX_DAYS[newBox]||7)*DAY_MS;
  }
  progress[k]={box:newBox, reps:(cur.reps||0)+1, hard:cur.hard||0, next:nextDue, ts:now};
  saveProgress();
  recordStudyActivity();
  updateDueBadge();
  return progress[k];
}

function calcPackStats(items){
  const now=Date.now();
  let mastered=0, learning=0, due=0;
  for(const x of items){
    const p=getEntry(x);
    if(p){
      if(p.box>=4) mastered++;
      else if(p.box>=1) learning++;
      if(p.box>=1 && p.box<5 && (p.next||0)<=now) due++;
    }
  }
  const known=mastered + Math.round(learning*0.5);
  const pct=items.length?Math.round((mastered/items.length)*100):0;
  return {total:items.length, mastered, learning, due, pct};
}

// =========================================================
// APP UI STATE
// =========================================================
let state={
  tab:'lessons',
  activePack:null,
  activeWordId:null,
  wordReturnTab:'search',
  packFilter:'all',
  onlyUnmastered:false,
  quizMask:false,
  verbFilter:'all',
  verbQuery:'',
  verbIdx:0,
  scDone:false,
  scAnim:'',
  searchScope:'all',    // 'all' | 'current'
  searchQuery:'',
  searchKind:'all',
  searchAlpha:'',
  limit:45,
  // Review / Flashcard config & live session
  revMode:'standard',   // 'standard' | 'article' | 'reverse'
  revDeck:'smart',      // 'smart' | 'due' | 'L1'..'L12' | 'gram' | 'verbs' | 'telc'
  revSize:20,
  session:null          // null or { queue, idx, totalInit, flipped, artPicked, rightCnt, againCnt, done, mode, deckTitle }
};

let hoverTimer=null, playSeq=0, activeEl=null, toastTimer=null;

// =========================================================
// INDEXEDDB SMART OFFLINE AUDIO CACHE + NATIVE AUDIO ENGINE
// =========================================================
const audioPlayer=new Audio();
audioPlayer.referrerPolicy="no-referrer";
const canPlayOgg=!!audioPlayer.canPlayType('audio/ogg; codecs="vorbis"') || !!audioPlayer.canPlayType('audio/ogg');
const humanMemCache=new Map();
let currentBlobUrl=null;

const AUDIO_DB_NAME='de_all_audio_v1';
const AUDIO_STORE='clips';
let audioDbPromise=null;

function openAudioDB(){
  if(audioDbPromise) return audioDbPromise;
  if(!('indexedDB' in window)) return Promise.resolve(null);
  audioDbPromise=new Promise(resolve=>{
    try{
      const req=indexedDB.open(AUDIO_DB_NAME, 1);
      req.onupgradeneeded=e=>{
        const db=e.target.result;
        if(!db.objectStoreNames.contains(AUDIO_STORE)) db.createObjectStore(AUDIO_STORE);
      };
      req.onsuccess=()=>resolve(req.result);
      req.onerror=()=>resolve(null);
    }catch(e){ resolve(null); }
  });
  return audioDbPromise;
}

async function idbGetClip(word){
  const db=await openAudioDB();
  if(!db) return null;
  return new Promise(resolve=>{
    try{
      const tx=db.transaction(AUDIO_STORE,'readonly');
      const req=tx.objectStore(AUDIO_STORE).get(word);
      req.onsuccess=()=>resolve(req.result||null);
      req.onerror=()=>resolve(null);
    }catch(e){ resolve(null); }
  });
}

async function idbPutClip(word, obj){
  const db=await openAudioDB();
  if(!db) return;
  try{
    const tx=db.transaction(AUDIO_STORE,'readwrite');
    tx.objectStore(AUDIO_STORE).put(obj, word);
  }catch(e){}
}

function fmtBytesFa(bytes){
  if(!bytes || bytes<=0) return '۰ کیلوبایت';
  if(bytes < 1024*1024) return `${faNum(Math.max(1, Math.round(bytes/1024)))} کیلوبایت`;
  return `${(bytes/(1024*1024)).toFixed(1).replace('.', '٫')} مگابایت`;
}

async function idbGetAudioStats(){
  const db=await openAudioDB();
  const res={count:0, totalBytes:0, cachedSet:new Set(), batchMissSet:new Set()};
  if(!db) return res;
  return new Promise(resolve=>{
    try{
      const tx=db.transaction(AUDIO_STORE,'readonly');
      const req=tx.objectStore(AUDIO_STORE).openCursor();
      req.onsuccess=e=>{
        const cursor=e.target.result;
        if(cursor){
          const k=cursor.key, v=cursor.value;
          if(v && v.blob){
            res.count++;
            res.totalBytes += (v.size || v.blob.size || 0);
            res.cachedSet.add(k);
          }else if(v && v.batchMiss){
            res.batchMissSet.add(k);
          }
          cursor.continue();
        }else{
          resolve(res);
        }
      };
      req.onerror=()=>resolve(res);
    }catch(e){ resolve(res); }
  });
}

async function clearAudioCache(){
  if(dlState.running) cancelBatchDownload();
  const db=await openAudioDB();
  if(db){
    await new Promise(resolve=>{
      try{
        const tx=db.transaction(AUDIO_STORE,'readwrite');
        tx.objectStore(AUDIO_STORE).clear();
        tx.oncomplete=resolve;
        tx.onerror=resolve;
      }catch(e){ resolve(); }
    });
  }
  humanMemCache.clear();
  refreshCacheLabel();
  if(state.activePack) updatePackAudioBtnLive();
  showToast('حافظهٔ صوتی پاک شد', '🧹 کش صدا', 't-tts');
}

async function refreshCacheLabel(){
  const el=document.getElementById('cacheInfoLbl');
  if(!el) return;
  const st=await idbGetAudioStats();
  el.textContent=st.count
    ? `${faNum(st.count)} صدای انسانی ذخیره شده · حجم اشغال‌شده: ${fmtBytesFa(st.totalBytes)}`
    : 'هنوز صدایی ذخیره نشده؛ با دکمهٔ زیر می‌توانی یکجا دانلود کنی یا هنگام مطالعه خودکار کش شود';
}

// =========================================================
// BATCH HUMAN AUDIO DOWNLOADER (WIKIMEDIA COMMONS 50-TITLE BATCH API)
// =========================================================
let dlState={
  running:false,
  paused:false,
  cancelled:false,
  scope:'',
  title:'',
  totalWords:0,
  processed:0,
  alreadyCached:0,
  downloadedCnt:0,
  missedCnt:0,
  downloadedBytes:0,
  existingBytes:0
};

function getPackAudioWords(scope){
  let items=[];
  if(scope==='essential'){
    for(const lvl of LEVEL_ORDER){
      for(const x of ALL_DATA[lvl]){ if(x.uq && x.ess) items.push(x); }
    }
  }else if(scope==='all'){
    for(const lvl of LEVEL_ORDER){
      for(const x of ALL_DATA[lvl]){ if(x.uq) items.push(x); }
    }
  }else if(scope==='verbs'){
    items=getScopedUnique().filter(x=>x.k==='verb');
  }else{
    items=getPackItems(scope);
  }
  const set=new Set();
  for(const x of items){
    const w=extractSingleWord(x.lm);
    if(w) set.add(w);
    if(x.pl){
      const pw=extractSingleWord(x.pl);
      if(pw) set.add(pw);
    }
  }
  return Array.from(set);
}

function getBatchScopeTitle(scope){
  const cfg=getLevelCfg();
  if(scope==='essential') return 'بستهٔ اصلی همهٔ سطوح (A1 تا B2)';
  if(scope==='all') return 'کل مجموعهٔ همهٔ سطوح (A1 تا B2)';
  if(scope==='verbs') return cfg.batchVerbsTitle;
  if(scope===cfg.primaryExtra.pk) return cfg.primaryExtra.batchTitle;
  const opt=cfg.optionalExtras.find(o=>o.pk===scope);
  if(opt) return opt.batchTitle;
  const m=LESSON_META.find(l=>l.pk===scope);
  return m?`${activeLevel} · درس ${m.num} · ${m.title}`:scope;
}

function renderDownloadPanel(){
  const p=document.getElementById('dlPanel');
  if(!p) return;
  const active=dlState.running;
  p.classList.toggle('show', active);
  document.body.classList.toggle('dl-open', active);
  if(!active) return;

  const pct=dlState.totalWords?Math.min(100, Math.round((dlState.processed/dlState.totalWords)*100)):0;
  document.getElementById('dlTitle').textContent=(dlState.paused?'⏸ متوقف: ':'📥 در حال دانلود: ')+dlState.title;
  document.getElementById('dlPct').textContent=`${faNum(pct)}٪`;
  document.getElementById('dlBarFill').style.width=pct+'%';
  document.getElementById('dlWords').textContent=`${faNum(dlState.processed)} از ${faNum(dlState.totalWords)} کلمه`;

  // Live downloaded MB + dynamic estimate of remaining size based on observed avg clip size (default 18 KB)
  const avgBytes=dlState.downloadedCnt>=5 ? (dlState.downloadedBytes/dlState.downloadedCnt) : 18500;
  const remWords=Math.max(0, dlState.totalWords - dlState.processed);
  const estTotalSession=dlState.downloadedBytes + Math.round(remWords * 0.88 * avgBytes);
  document.getElementById('dlSize').textContent=`${fmtBytesFa(dlState.downloadedBytes)} / ~${fmtBytesFa(estTotalSession)}`;

  document.getElementById('dlSubInfo').textContent=
    `✓ ${faNum(dlState.downloadedCnt)} جدید · 💾 ${faNum(dlState.alreadyCached)} قبلاً کش‌شده` +
    (dlState.missedCnt?` · ℹ️ ${faNum(dlState.missedCnt)} با گویندهٔ هوشمند`:'');

  const pb=document.getElementById('dlPauseBtn');
  pb.textContent=dlState.paused?'▶ ادامه دانلود':'⏸ توقف موقت';
}

function togglePauseDownload(){
  if(!dlState.running) return;
  dlState.paused=!dlState.paused;
  renderDownloadPanel();
}

function cancelBatchDownload(){
  dlState.cancelled=true;
  dlState.paused=false;
  dlState.running=false;
  renderDownloadPanel();
  refreshCacheLabel();
  if(state.activePack) updatePackAudioBtnLive();
  showToast('دانلود متوقف شد (فایل‌های قبلی حفظ شدند)', '⏹ توقف', 't-tts');
}

async function resolveWikimediaBatch(words){
  // Up to 10 words x up to 5 filename candidates = max 50 titles in 1 single Wikimedia API call
  const wordCandidates={};
  const allTitles=[];
  for(const w of words){
    const wLow=w.toLowerCase(), wCap=w.charAt(0).toUpperCase()+w.slice(1);
    const cands=[...new Set([`File:De-${w}.ogg`,`File:De-${w}2.ogg`,`File:De-${wLow}.ogg`,`File:De-${wCap}.ogg`,`File:De-at-${w}.ogg`])];
    wordCandidates[w]=cands;
    for(const t of cands) allTitles.push(t);
  }
  const uniqueTitles=[...new Set(allTitles)];
  const foundMap={};
  for(let i=0;i<uniqueTitles.length;i+=50){
    const slice=uniqueTitles.slice(i, i+50);
    try{
      const url=`https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(slice.join('|'))}&prop=imageinfo&iiprop=url&format=json&origin=*`;
      const res=await fetch(url);
      if(res.ok){
        const data=await res.json();
        Object.values(data?.query?.pages||{}).forEach(p=>{
          if(!p.missing && p.imageinfo?.[0]?.url) foundMap[p.title]=p.imageinfo[0].url;
        });
      }
    }catch(e){}
  }
  const resolved={};
  for(const w of words){
    let hitUrl=null;
    for(const t of wordCandidates[w]){
      const nt=t.replace(/_/g,' ');
      if(foundMap[nt]){ hitUrl=foundMap[nt]; break; }
    }
    resolved[w]=hitUrl;
  }
  return resolved;
}

async function waitWhilePaused(){
  while(dlState.paused && !dlState.cancelled){
    await new Promise(r=>setTimeout(r, 250));
  }
}

async function startBatchAudio(scope){
  if(!canPlayOgg){
    showToast('مرورگر این دستگاه از فرمت OGG ویکی‌مدیا پشتیبانی نمی‌کند (از کروم اندروید استفاده کن)', '⚠️ توجه', 't-err');
    return;
  }
  if(dlState.running){
    showToast('یک دانلود همین الان در حال اجراست', '⏳ صبر کن', 't-load');
    return;
  }
  closeSettings();
  if((scope==='essential' || scope==='all') && !allLevelsLoaded()){
    showToast('در حال آماده‌سازی دیتابیس هر ۴ سطح…', '⏳ لحظه‌ای', 't-load', 2000);
    await ensureAllLevelsLoaded();
    renderLevelBar();
  }
  const words=getPackAudioWords(scope);
  if(!words.length){
    showToast('تک‌واژه‌ای برای دانلود در این بخش نیست', 'ℹ️ اطلاعات', 't-tts');
    return;
  }
  const st=await idbGetAudioStats();
  const todo=[];
  let already=0, prevMiss=0;
  for(const w of words){
    if(st.cachedSet.has(w)) already++;
    else if(st.batchMissSet.has(w)) prevMiss++;
    else todo.push(w);
  }
  if(!todo.length){
    showToast(`همهٔ ${faNum(already)} صدای انسانی این بخش قبلاً دانلود شده!`, '✅ آمادهٔ آفلاین', 't-cache');
    refreshCacheLabel();
    if(state.activePack) updatePackAudioBtnLive();
    return;
  }

  dlState={
    running:true,
    paused:false,
    cancelled:false,
    scope,
    title:getBatchScopeTitle(scope),
    totalWords:words.length,
    processed:already+prevMiss,
    alreadyCached:already,
    downloadedCnt:0,
    missedCnt:prevMiss,
    downloadedBytes:0,
    existingBytes:st.totalBytes
  };
  renderDownloadPanel();

  // Process in chunks of 10 words (1 fast Wikimedia API call per 10 words, then 4-way parallel blob fetch)
  const CHUNK=10;
  for(let i=0; i<todo.length; i+=CHUNK){
    await waitWhilePaused();
    if(dlState.cancelled) return;

    const batch=todo.slice(i, i+CHUNK);
    const resolved=await resolveWikimediaBatch(batch);
    if(dlState.cancelled) return;

    const toFetch=[];
    for(const w of batch){
      if(resolved[w]) toFetch.push({word:w, url:resolved[w]});
      else{
        dlState.missedCnt++;
        dlState.processed++;
        await idbPutClip(w, {batchMiss:true, ts:Date.now()});
      }
    }
    renderDownloadPanel();

    // 4-way parallel blob downloader
    let cursor=0;
    const workers=Array.from({length:Math.min(4, toFetch.length)}, async ()=>{
      while(cursor<toFetch.length){
        await waitWhilePaused();
        if(dlState.cancelled) return;
        const job=toFetch[cursor++];
        try{
          const r=await fetch(job.url);
          if(r.ok){
            const blob=await r.blob();
            if(blob && blob.size>400){
              await idbPutClip(job.word, {blob, size:blob.size, label:'صدای انسانی (Wiktionary)', ts:Date.now()});
              dlState.downloadedCnt++;
              dlState.downloadedBytes += blob.size;
            }else{
              dlState.missedCnt++;
            }
          }else{
            dlState.missedCnt++;
          }
        }catch(e){
          dlState.missedCnt++;
        }
        dlState.processed++;
        renderDownloadPanel();
      }
    });
    await Promise.all(workers);
  }

  if(!dlState.cancelled){
    const doneCnt=dlState.downloadedCnt, doneBytes=dlState.downloadedBytes;
    dlState.running=false;
    renderDownloadPanel();
    refreshCacheLabel();
    if(state.activePack) updatePackAudioBtnLive();
    showToast(`${faNum(doneCnt)} صدای جدید (${fmtBytesFa(doneBytes)}) ذخیره شد!`, '✅ دانلود کامل شد', 't-human');
  }
}

async function updatePackAudioBtnLive(){
  const btn=document.getElementById('packAudioBtn');
  if(!btn || !state.activePack) return;
  const words=getPackAudioWords(state.activePack);
  const st=await idbGetAudioStats();
  let have=0, checked=0;
  for(const w of words){
    if(st.cachedSet.has(w)){ have++; checked++; }
    else if(st.batchMissSet.has(w)) checked++;
  }
  if(words.length>0 && checked>=words.length){
    btn.classList.add('cached');
    btn.textContent=`✓ صوت درس آفلاین (${faNum(have)})`;
  }else if(have>0){
    btn.classList.remove('cached');
    btn.textContent=`📥 دانلود صوت (${faNum(have)}/${faNum(words.length)})`;
  }else{
    btn.classList.remove('cached');
    btn.textContent=`📥 دانلود صوت درس`;
  }
}

let bestDeVoice=null;
function pickBestDeVoice(){
  if(!('speechSynthesis' in window)) return null;
  const voices=window.speechSynthesis.getVoices()||[];
  const de=voices.filter(v=>/^de([-_]|$)/i.test(v.lang));
  if(!de.length) return null;
  const score=v=>{
    let s=0;
    const n=(v.name||'').toLowerCase(), l=(v.lang||'').toLowerCase();
    if(l==='de-de'||l==='de_de') s+=30; else s+=15;
    if(n.includes('natural')||n.includes('neural')) s+=100;
    if(n.includes('katja')||n.includes('conrad')||n.includes('amala')||n.includes('killian')) s+=40;
    if(n.includes('google')) s+=75;
    if(n.includes('anna')||n.includes('petra')||n.includes('markus')||n.includes('yannick')) s+=50;
    if(n.includes('online')) s+=25;
    return s;
  };
  de.sort((a,b)=>score(b)-score(a));
  bestDeVoice=de[0];
  return bestDeVoice;
}
if('speechSynthesis' in window){
  pickBestDeVoice();
  window.speechSynthesis.onvoiceschanged=pickBestDeVoice;
}

function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
const _BIDI_RE=/(?:(?:\d+(?:[.,]\d+)?\s+|\.\.\.,?\s*|\+\s*|-(?=[A-Za-zÄÖÜäöüß]))?[A-Za-zÄÖÜäöüß](?:\([A-Za-zÄÖÜäöüß0-9.,!?\-–+/'’:\s]+\)|[A-Za-zÄÖÜäöüß0-9\s.,!?\-–+/'’:=…→])*)/g;
function escBidi(s){
  const str=String(s??'');
  if(!str) return '';
  if(!/[A-Za-zÄÖÜäöüß]/.test(str)) return esc(str);
  if(!/[\u0600-\u06FF]/.test(str)) return `<bdi class="de-iso" dir="ltr">${esc(str)}</bdi>`;
  let out='', last=0;
  _BIDI_RE.lastIndex=0;
  let m;
  while((m=_BIDI_RE.exec(str))!==null){
    if(m.index>last) out+=esc(str.slice(last, m.index));
    const raw=m[0];
    let end=raw.length;
    while(end>0 && (raw[end-1]===' '||raw[end-1]==='\t')) end--;
    let core=raw.slice(0, end), trail=raw.slice(end);
    while(core.length){
      const ch=core[core.length-1];
      if(':,/=+→'.includes(ch)){
        trail=ch+trail; core=core.slice(0,-1);
      }else if(ch==='-' && core.length>=2 && core[core.length-2]===' '){
        trail=ch+trail; core=core.slice(0,-1);
      }else if(ch==='!' && !core.includes(' ')){
        trail=ch+trail; core=core.slice(0,-1);
      }else{
        break;
      }
      while(core.length && core[core.length-1]===' '){
        trail=' '+trail; core=core.slice(0,-1);
      }
    }
    if(core) out+=`<bdi class="de-iso" dir="ltr">${esc(core)}</bdi>`;
    if(trail) out+=esc(trail);
    last=m.index+raw.length;
  }
  if(last<str.length) out+=esc(str.slice(last));
  return out;
}

function splitOutsideParens(text, seps='|;؛'){
  const out=[]; let buf='', depth=0;
  for(const ch of String(text||'')){
    if(ch==='(') depth++;
    else if(ch===')') depth=Math.max(0, depth-1);
    if(depth===0 && seps.includes(ch)){
      const p=buf.trim();
      if(p) out.push(p);
      buf='';
    }else buf+=ch;
  }
  const p=buf.trim();
  if(p) out.push(p);
  return out;
}

function parseValenzItem(seg){
  const s=String(seg||'').trim();
  if(!s) return {de:'', fa:''};
  const hasFa=/[\u0600-\u06FF]/.test(s);
  const hasDe=/[A-Za-zÄÖÜäöüß]/.test(s);
  if(!hasFa) return {de:s, fa:''};
  if(!hasDe) return {de:'', fa:s};

  if(s.includes(' — ')){
    const idx=s.indexOf(' — ');
    const left=s.slice(0, idx).trim();
    const right=s.slice(idx+3).trim();
    const faTags=[];
    let deClean=left.replace(/\(([^)]+)\)/g, (m, inner)=>{
      const t=inner.trim();
      if(/[\u0600-\u06FF]/.test(t)){
        if(!faTags.includes(t)) faTags.push(t);
        return '';
      }
      return m;
    }).replace(/\s{2,}/g,' ').trim();
    if(deClean && !/[\u0600-\u06FF]/.test(deClean)){
      const faFull=faTags.length ? `${right} (${faTags.join(' / ')})` : right;
      return {de:deClean, fa:faFull};
    }
  }

  const mPref=s.match(/^([\u0600-\u06FF\s\u200c/]+):\s*(.+)$/);
  if(mPref && !/[\u0600-\u06FF]/.test(mPref[2])){
    return {de:mPref[2].trim(), fa:mPref[1].trim()};
  }

  const faNotes=[];
  let deClean=s.replace(/\(([^)]+)\)/g, (m, inner)=>{
    let t=inner.trim();
    if(/[\u0600-\u06FF]/.test(t)){
      t=t.replace(/^=\s*/,'').trim();
      if(t && !faNotes.includes(t)) faNotes.push(t);
      return '';
    }
    return m;
  }).replace(/\s{2,}/g,' ').replace(/\s*\/\s*$/,'').trim();
  if(deClean && !/[\u0600-\u06FF]/.test(deClean) && faNotes.length){
    return {de:deClean, fa:faNotes.join(' · ')};
  }
  return {de:'', fa:s};
}

function renderValenzBox(title, rawText){
  const segs=splitOutsideParens(rawText, '|;؛');
  if(!segs.length) return '';
  const rows=segs.map(sg=>{
    const {de, fa}=parseValenzItem(sg);
    if(de && fa){
      return `<div class="val-row"><span class="val-fa">${escBidi(fa)}</span><span class="val-de">${esc(de)}</span></div>`;
    }else if(de){
      return `<div class="val-row"><span class="val-de">${esc(de)}</span></div>`;
    }
    return `<div class="val-row"><span class="val-fa">${escBidi(fa)}</span></div>`;
  }).join('');
  return `<div class="val-box"><div class="val-hdr">🔗 ${title}</div><div class="val-list">${rows}</div></div>`;
}

function renderLinesWithBidi(rawText, seps='|'){
  const lines=splitOutsideParens(rawText, seps);
  if(lines.length<=1) return escBidi(rawText);
  return lines.map(l=>`<div class="rule-line">${escBidi(l)}</div>`).join('');
}

function renderNddBox(isAdj, ttl, rawText){
  const segs=splitOutsideParens(rawText, '·|');
  const body=segs.map(sg=>{
    const m=sg.match(/^(.+?):\s*([A-Za-zÄÖÜäöüß][^:\u0600-\u06FF]*)$/);
    if(m){
      const faPart=m[1].trim();
      const dePart=m[2].trim();
      const sayDe=dePart.split('/')[0].trim();
      return `<div class="rule-line"><div>${escBidi(faPart)}:</div><div class="mini-de-bar" data-say="${esc(sayDe)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)">${esc(dePart)}</div></div>`;
    }
    return `<div class="rule-line">${escBidi(sg)}</div>`;
  }).join('');
  return `<div class="ndekl-box ${isAdj?'adj-kind':''}"><div class="ndekl-hdr">⚠️ ${ttl}</div>${body}</div>`;
}

function renderVpvValue(rawText){
  const m=String(rawText||'').match(/^(.+?):\s*([A-Za-zÄÖÜäöüß][^\u0600-\u06FF·]+)(.*)$/);
  if(m){
    const lbl=m[1].trim(), deForm=m[2].trim(), rest=m[3].trim();
    const sayDe=deForm.replace(/\([^)]*\)/g,'').trim();
    return `<div class="b2v-stack"><div class="b2v-inline-pair"><span>${escBidi(lbl)}</span><span class="b2v-de-pill" data-say="${esc(sayDe)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)">${esc(deForm)}</span></div>${rest?`<div style="font-size:.71rem;color:var(--muted)">${escBidi(rest.replace(/^·\s*/,''))}</div>`:''}</div>`;
  }
  return escBidi(rawText);
}

function renderVzuValue(rawText){
  const s=String(rawText||'').trim();
  const m=s.match(/^(.*?)\s*\(([A-Za-zÄÖÜäöüß][^)\u0600-\u06FF]{8,})\)\s*$/);
  if(m){
    const head=m[1].trim(), exDe=m[2].trim();
    const sayEx=exDe.split('/')[0].trim();
    return `<div class="b2v-stack"><div>${escBidi(head)}</div><div class="mini-de-bar" data-say="${esc(sayEx)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)">${esc(exDe)}</div></div>`;
  }
  return escBidi(s);
}

function renderAdjTip(rawText){
  const s=String(rawText||'').trim();
  const m1=s.match(/^(.*?):\s*([A-Za-zÄÖÜäöüß][^\u0600-\u06FF]+)$/);
  if(m1){
    const faPart=m1[1].replace(/\($/,'').trim();
    const dePart=m1[2].replace(/\)$/,'').trim();
    const sayDe=dePart.split('/')[0].trim();
    return `<div class="b2-tip"><div>📌 ${escBidi(faPart)}</div><div class="mini-de-bar" data-say="${esc(sayDe)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)">${esc(dePart)}</div></div>`;
  }
  const m2=s.match(/^(.*?)\s*\(([A-Za-zÄÖÜäöüß][^)\u0600-\u06FF]{6,})\)\s*$/);
  if(m2){
    const faPart=m2[1].trim(), dePart=m2[2].trim();
    const sayDe=dePart.split('/')[0].trim();
    return `<div class="b2-tip"><div>📌 ${escBidi(faPart)}</div><div class="mini-de-bar" data-say="${esc(sayDe)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)">${esc(dePart)}</div></div>`;
  }
  return `<div class="b2-tip">📌 ${escBidi(s)}</div>`;
}


function faNum(n){return Number(n).toLocaleString('fa-IR')}
function normDe(s){
  return String(s||'').toLowerCase()
    .replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss')
    .replace(/[إأآ]/g,'ا').replace(/ي/g,'ی').replace(/ك/g,'ک');
}

function setTheme(t){
  prefs.theme=t;
  try{ localStorage.setItem(GLOBAL_THEME_KEY, t); }catch(e){}
  document.documentElement.setAttribute('data-theme', t);
  const b=document.getElementById('btnTheme'); if(b) b.textContent=(t==='dark')?'☀️':'🌙';
  const cb=document.getElementById('setDark'); if(cb) cb.checked=(t==='dark');
  const mc=document.querySelector('meta[name="theme-color"]');
  if(mc) mc.setAttribute('content', t==='dark'?'#0b1220':getLevelCfg().themeColorLight);
  savePrefs();
}
function toggleTheme(){ setTheme(prefs.theme==='dark'?'light':'dark'); }
function sanitizeB2State(){
  if(!prefs.showB2Grammar){
    if(String(state.verbFilter||'').startsWith('b2_')) state.verbFilter='all';
    if(String(state.searchKind||'').startsWith('b2_')) state.searchKind='all';
    if(state.revMode==='prep_case' || state.revMode==='verb_b2') state.revMode='standard';
    if(state.revDeck==='b2_ndekl' || state.revDeck==='b2_preps') state.revDeck='smart';
  }
}
function syncB2Buttons(){
  const on=!!prefs.showB2Grammar;
  const lbl=getLevelCfg().b2BtnLabel||'B2';
  const topBtn=document.getElementById('btnB2Top');
  if(topBtn){
    topBtn.classList.toggle('on', on);
    topBtn.textContent=on?`✓ ${lbl}`:lbl;
    topBtn.title=on?`لایهٔ جامع دستوری B2/C1 روشن است (لمس = حالت خلوت ${activeLevel})`:'نمایش لایهٔ جامع دستوری تا B2';
  }
  const setCb=document.getElementById('setB2Grammar');
  if(setCb) setCb.checked=on;
}
function toggleB2Mode(){
  prefs.showB2Grammar=!prefs.showB2Grammar;
  savePrefs();
  sanitizeB2State();
  syncB2Buttons();
  renderApp();
  showToast(
    prefs.showB2Grammar?'لایهٔ جامع دستوری B2/C1 (ملکی، حروف اضافه، امری و التزامی…)':`نمای خلوت و متمرکز سطح ${activeLevel}`,
    prefs.showB2Grammar?'🎓 لایهٔ B2 روشن':`📚 حالت خلوت ${activeLevel}`,
    prefs.showB2Grammar?'t-human':'t-tts',
    1800
  );
}

function openSettings(){
  const cfg=getLevelCfg();
  document.getElementById('setDark').checked=(prefs.theme==='dark');
  document.getElementById('setAllPacks').checked=!!prefs.includeExtra;
  const et=document.getElementById('setExtraTitle');
  const ed=document.getElementById('setExtraDesc');
  if(et) et.textContent=cfg.extraSettingTitle;
  if(ed) ed.textContent=cfg.extraSettingDesc;
  const be=document.getElementById('btnDlEss');
  const ba=document.getElementById('btnDlAll');
  if(be) be.textContent='📥 دانلود بستهٔ اصلی همهٔ سطوح (~۹۲ مگابایت)';
  if(ba) ba.textContent='📦 دانلود کل همهٔ سطوح (~۱۳۴ مگابایت)';
  const rb=document.getElementById('btnResetLvl');
  if(rb) rb.textContent=`🗑️ ریست سطح ${activeLevel}`;
  const bi=document.getElementById('backupInfoLbl');
  if(bi){
    let totRec=0;
    LEVEL_ORDER.forEach(l=>{
      const pr=(l===activeLevel)?progress:safeJsonParse(LEVEL_CONFIG[l].progKey, {});
      totRec+=Object.keys(pr).length;
    });
    bi.textContent=`ذخیرهٔ یکجای A1 تا B2 (${faNum(totRec)} رکورد ثبت‌شده) · سازگار با پشتیبان تکی قبلی`;
  }
  document.getElementById('setAudioMode').value=prefs.audioMode;
  document.getElementById('setExtLinks').checked=!!prefs.showExtLinks;
  document.getElementById('setNotes').checked=!!prefs.showNotes;
  document.getElementById('setB2Grammar').checked=!!prefs.showB2Grammar;
  document.getElementById('setHover').checked=!!prefs.hoverMode;
  document.getElementById('setCardAutoAudio').checked=(prefs.cardAutoAudio!==false);
  refreshCacheLabel();
  refreshPwaUI();
  document.getElementById('settingsModal').classList.add('open');
}
function closeSettings(){ document.getElementById('settingsModal').classList.remove('open'); }
function toggleSetting(k, v){
  prefs[k]=v; savePrefs();
  if(k==='showB2Grammar'){ sanitizeB2State(); syncB2Buttons(); }
  if(k==='includeExtra' && !v && getLevelCfg().optionalExtras.some(o=>o.pk===state.activePack)) state.activePack=null;
  updateDueBadge();
  renderLevelBar(activeLevel);
  renderApp();
}

function showToast(word, srcText, cls, duration=2100){
  const t=document.getElementById('toast');
  t.innerHTML=`<span class="tsrc ${cls}">${esc(srcText)}</span><span class="tword">${esc(word)}</span>`;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'), duration);
}
function hideToastSoon(ms=350){
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>{
    const t=document.getElementById('toast');
    if(t) t.classList.remove('show');
  }, ms);
}
function setSpeakingEl(el){
  if(activeEl) activeEl.classList.remove('speaking');
  activeEl=el||null;
  if(activeEl) activeEl.classList.add('speaking');
}
function stopAudio(){
  if(typeof scAutoTimer!=='undefined') clearTimeout(scAutoTimer);
  playSeq++;
  try{ audioPlayer.onended=null; audioPlayer.onerror=null; audioPlayer.pause(); audioPlayer.currentTime=0; }catch(e){}
  if(currentBlobUrl){ try{ URL.revokeObjectURL(currentBlobUrl); }catch(e){} currentBlobUrl=null; }
  if('speechSynthesis' in window){ try{ window.speechSynthesis.cancel(); }catch(e){} }
  setSpeakingEl(null);
}

function extractSingleWord(raw){
  let s=String(raw||'').trim();
  s=s.replace(/^(der|die|das)\s+/i,'');
  s=s.replace(/\([^)]*\)/g,' ').trim();
  if(s.includes('/')) s=s.split('/')[0].trim();
  s=s.replace(/-$/,'').trim();
  s=s.replace(/^[„"‚'«».,!?:;…\s]+|[„"‚'«».,!?:;…\s]+$/g,'').trim();
  if(!s || /\s/.test(s) || s.length<2) return '';
  if(!/^[A-Za-zÄÖÜäöüß\-]+$/.test(s)) return '';
  return s;
}
function cleanSpeakText(raw){
  let s=String(raw||'')
    .replace(/\(\s*pl\.?\s*\)/gi,'')
    .replace(/\(\+\s*[^)]+\)/g,'')
    .replace(/\(sich\)/gi,'sich')
    .replace(/\s+/g,' ')
    .replace(/\.\.\.|…/g,' ')
    .trim();
  if(s==='—' || s==='-') return '';
  return s;
}

async function findHumanAudio(word){
  // 1. Check IndexedDB offline blob cache first!
  const cached=await idbGetClip(word);
  if(cached && cached.blob){
    return {blob:cached.blob, label:'صدای انسانی · کش آفلاین', isCached:true};
  }
  if(humanMemCache.has(word)) return humanMemCache.get(word);

  const wLow=word.toLowerCase(), wCap=word.charAt(0).toUpperCase()+word.slice(1);
  const titles=[...new Set([`File:De-${word}.ogg`,`File:De-${word}2.ogg`,`File:De-${wLow}.ogg`,`File:De-${wCap}.ogg`,`File:De-at-${word}.ogg`])];

  let hit=null;
  if(canPlayOgg){
    try{
      const url=`https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles.join('|'))}&prop=imageinfo&iiprop=url&format=json&origin=*`;
      const res=await fetch(url);
      if(res.ok){
        const data=await res.json();
        const found={};
        Object.values(data?.query?.pages||{}).forEach(p=>{
          if(!p.missing && p.imageinfo?.[0]?.url) found[p.title]=p.imageinfo[0].url;
        });
        for(const t of titles){
          const nt=t.replace(/_/g,' ');
          if(found[nt]){ hit={url:found[nt], label:'صدای انسانی (Wiktionary)'}; break; }
        }
      }
    }catch(e){}
  }
  if(!hit){
    try{
      const sUrl=`https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srlimit=10&srsearch=${encodeURIComponent(`"LL-Q188 (deu)" "${word}"`)}&format=json&origin=*`;
      const sRes=await fetch(sUrl);
      if(sRes.ok){
        const sData=await sRes.json();
        const escW=word.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
        const re=new RegExp(`-${escW}\\.(wav|ogg|mp3)$`,'i');
        const match=(sData?.query?.search||[]).find(h=>re.test(h.title) && (canPlayOgg || !/\.ogg$/i.test(h.title)));
        if(match){
          const uRes=await fetch(`https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(match.title)}&prop=imageinfo&iiprop=url&format=json&origin=*`);
          if(uRes.ok){
            const uData=await uRes.json();
            const p=Object.values(uData?.query?.pages||{})[0];
            if(p?.imageinfo?.[0]?.url){ hit={url:p.imageinfo[0].url, label:'صدای انسانی (Lingua Libre)'}; }
          }
        }
      }
    }catch(e){}
  }

  humanMemCache.set(word, hit);
  // Save audio blob into IndexedDB in background so next time it works 100% offline!
  if(hit && hit.url){
    fetch(hit.url).then(r=>r.ok?r.blob():null).then(blob=>{
      if(blob && blob.size>500) idbPutClip(word, {blob, size:blob.size, label:hit.label, ts:Date.now()});
    }).catch(()=>{});
  }
  return hit;
}

function playSource(srcUrl, rate, seq, displayWord, label, toastCls){
  return new Promise((resolve, reject)=>{
    if(seq!==playSeq){ resolve(false); return; }
    audioPlayer.pause();
    audioPlayer.src=srcUrl;
    audioPlayer.playbackRate=rate;
    audioPlayer.onended=()=>{ if(seq===playSeq){ setSpeakingEl(null); hideToastSoon(350); } resolve(true); };
    audioPlayer.onerror=()=>reject(new Error('audio_err'));
    const p=audioPlayer.play();
    if(p && typeof p.then==='function'){
      p.then(()=>{ if(seq===playSeq) showToast(displayWord, label, toastCls); }).catch(reject);
    }else{
      showToast(displayWord, label, toastCls);
    }
  });
}

function speakTTS(text, rate, seq, displayWord){
  return new Promise((resolve, reject)=>{
    if(seq!==playSeq){ resolve(false); return; }
    if(!('speechSynthesis' in window)){ reject(new Error('no_tts')); return; }
    const voice=pickBestDeVoice();
    if(!voice){ reject(new Error('no_de')); return; }
    window.speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    u.lang='de-DE'; u.voice=voice; u.rate=rate;
    u.onstart=()=>{
      if(seq===playSeq){
        const vn=voice.name.replace(/Microsoft |Google |Online \(Natural\) - German \(Germany\)/gi,'').trim()||'آلمانی';
        showToast(displayWord, (/natural|neural|google/i.test(voice.name))?`گویندهٔ هوشمند (${vn})`:`تلفظ دستگاه (${vn})`, 't-tts');
      }
    };
    u.onend=()=>{ if(seq===playSeq){ setSpeakingEl(null); hideToastSoon(350); } resolve(true); };
    u.onerror=()=>reject(new Error('tts_err'));
    window.speechSynthesis.speak(u);
  });
}

async function speakDe(rawText, el){
  const text=cleanSpeakText(rawText);
  if(!text) return;
  stopAudio();
  const seq=playSeq;
  setSpeakingEl(el);
  const aRate=1.0, tRate=0.96;

  if(prefs.audioMode==='human_first'){
    const single=extractSingleWord(rawText);
    if(single){
      const hit=await findHumanAudio(single);
      if(seq!==playSeq) return;
      if(hit){
        try{
          if(hit.blob){
            currentBlobUrl=URL.createObjectURL(hit.blob);
            await playSource(currentBlobUrl, aRate, seq, single, hit.label, 't-cache');
            return;
          }else if(hit.url){
            await playSource(hit.url, aRate, seq, single, hit.label, 't-human');
            return;
          }
        }catch(e){}
      }
    }
  }
  if(seq!==playSeq) return;
  try{ await speakTTS(text, tRate, seq, text); return; }catch(e){}
  if(seq!==playSeq) return;
  try{
    const url=`https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=${encodeURIComponent(text.slice(0,180))}`;
    await playSource(url, aRate, seq, text, 'گویندهٔ آنلاین', 't-tts');
  }catch(e){
    if(seq===playSeq){ setSpeakingEl(null); showToast(text, 'اتصال صوتی برقرار نشد', 't-err'); }
  }
}

function onHoverSay(text, el){
  if(!prefs.hoverMode) return;
  clearTimeout(hoverTimer);
  hoverTimer=setTimeout(()=>speakDe(text, el), 330);
}
function onLeaveSay(){ clearTimeout(hoverTimer); }

// =========================================================
// BACKUP & RESTORE
// =========================================================
function exportProgress(){
  savePrefs();
  const levelsPayload={};
  let totalRecords=0;
  LEVEL_ORDER.forEach(lvl=>{
    const cfg=LEVEL_CONFIG[lvl];
    const pr=(lvl===activeLevel)?progress:safeJsonParse(cfg.progKey, {});
    const st=(lvl===activeLevel)?stats:safeJsonParse(cfg.statKey, {todayDate:'', todayCount:0, streak:0, lastActiveDate:''});
    const pf=(lvl===activeLevel)?prefs:safeJsonParse(cfg.prefKey, {});
    totalRecords+=Object.keys(pr).length;
    levelsPayload[lvl]={ progress:pr, stats:st, prefs:pf };
  });
  const payload={
    app:'Deutsch_A1_B2_Hub',
    type:'unified_4level_backup',
    version:4,
    exportedAt:new Date().toISOString(),
    activeLevel,
    theme:prefs.theme,
    levels:levelsPayload
  };
  const blob=new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download=`Babalulue_A1_B2_Backup_${todayKey()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
  showToast(`پشتیبان کامل ۴ سطح (${faNum(totalRecords)} رکورد) دانلود شد`, '📤 پشتیبان', 't-human');
}

function detectLegacyBackupLevel(obj){
  if(obj && typeof obj.level==='string'){
    const up=obj.level.toUpperCase();
    if(LEVEL_ORDER.includes(up)) return up;
  }
  const appStr=String(obj?.app||'').toUpperCase();
  if(appStr.includes('A1')) return 'A1';
  if(appStr.includes('A2')) return 'A2';
  if(appStr.includes('B1')) return 'B1';
  if(appStr.includes('B2')) return 'B2';
  return activeLevel;
}

function importProgress(input){
  const file=input.files?.[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const obj=JSON.parse(reader.result);
      if(!obj || typeof obj!=='object') throw new Error('invalid');

      if(obj.levels && typeof obj.levels==='object'){
        // Unified 4-level backup (v4)
        let restoredLevels=0, totalRecs=0;
        LEVEL_ORDER.forEach(lvl=>{
          const pack=obj.levels[lvl];
          if(!pack || typeof pack!=='object') return;
          const cfg=LEVEL_CONFIG[lvl];
          if(pack.progress && typeof pack.progress==='object'){
            try{ localStorage.setItem(cfg.progKey, JSON.stringify(pack.progress)); }catch(e){}
            totalRecs+=Object.keys(pack.progress).length;
          }
          if(pack.stats && typeof pack.stats==='object'){
            try{ localStorage.setItem(cfg.statKey, JSON.stringify(pack.stats)); }catch(e){}
          }
          if(pack.prefs && typeof pack.prefs==='object'){
            const curPf=safeJsonParse(cfg.prefKey, {});
            try{ localStorage.setItem(cfg.prefKey, JSON.stringify(Object.assign(curPf, pack.prefs))); }catch(e){}
          }
          restoredLevels++;
        });
        if(!restoredLevels) throw new Error('empty');
        if(obj.theme==='dark' || obj.theme==='light'){
          try{ localStorage.setItem(GLOBAL_THEME_KEY, obj.theme); }catch(e){}
        }
        loadLevelContext(activeLevel);
        setTheme(prefs.theme);
        sanitizeB2State();
        syncB2Buttons();
        updateDueBadge();
        renderLevelBar();
        closeSettings();
        renderApp();
        showToast(`${faNum(restoredLevels)} سطح (${faNum(totalRecs)} رکورد) بازیابی شد`, '📥 بازیابی کامل', 't-human', 2400);
      }else if(obj.progress && typeof obj.progress==='object'){
        // Legacy single-level backup (v1/v2/v3) — auto-routed to its exact level!
        const targetLvl=detectLegacyBackupLevel(obj);
        const cfg=LEVEL_CONFIG[targetLvl];
        const recCnt=Object.keys(obj.progress).length;
        try{ localStorage.setItem(cfg.progKey, JSON.stringify(obj.progress)); }catch(e){}
        if(obj.stats && typeof obj.stats==='object'){
          const curSt=safeJsonParse(cfg.statKey, {todayDate:'', todayCount:0, streak:0, lastActiveDate:''});
          try{ localStorage.setItem(cfg.statKey, JSON.stringify(Object.assign(curSt, obj.stats))); }catch(e){}
        }
        if(obj.prefs && typeof obj.prefs==='object'){
          const curPf=safeJsonParse(cfg.prefKey, {});
          const mergedPf=Object.assign(curPf, obj.prefs);
          mergedPf.theme=localStorage.getItem(GLOBAL_THEME_KEY)||'dark';
          try{ localStorage.setItem(cfg.prefKey, JSON.stringify(mergedPf)); }catch(e){}
        }
        loadLevelContext(activeLevel);
        sanitizeB2State();
        syncB2Buttons();
        updateDueBadge();
        renderLevelBar();
        closeSettings();
        renderApp();
        showToast(`سطح ${targetLvl}: ${faNum(recCnt)} رکورد بازیابی شد`, '📥 بازیابی تکی', 't-human', 2400);
      }else{
        throw new Error('invalid');
      }
    }catch(e){
      showToast('فایل پشتیبان معتبر نیست', '⚠️ خطا', 't-err');
    }
    input.value='';
  };
  reader.readAsText(file);
}

function resetProgress(){
  if(!confirm(`آیا مطمئنی که می‌خواهی کل پیشرفت و جعبه‌های مرور سطح ${activeLevel} را پاک کنی؟ (سایر سطوح دست‌نخورده می‌مانند)`)) return;
  progress={};
  stats={todayDate:'', todayCount:0, streak:0, lastActiveDate:''};
  saveProgress(); saveStats();
  state.session=null;
  updateDueBadge();
  renderLevelBar();
  closeSettings();
  renderApp();
  showToast(`پیشرفت سطح ${activeLevel} ریست شد`, '🗑️ پاک‌سازی', 't-tts');
}

// =========================================================
// NAVIGATION
// =========================================================
function getScopedUnique(){
  const ck=`${activeLevel}|${prefs.includeExtra?1:0}`;
  if(SCOPED_CACHE[ck]) return SCOPED_CACHE[ck];
  const res=DATA.filter(x=>x.uq && (prefs.includeExtra || x.ess));
  SCOPED_CACHE[ck]=res;
  return res;
}
function updateDueBadge(){
  const now=Date.now();
  const dueCnt=getScopedUnique().filter(x=>isDue(x, now)).length;
  const b=document.getElementById('dueBadge');
  if(!b) return;
  if(dueCnt>0){
    b.textContent=dueCnt>99?'99+':faNum(dueCnt);
    b.classList.add('show');
  }else{
    b.classList.remove('show');
  }
}

function clearHashSafely(){
  if(location.hash){
    try{ history.replaceState(null, '', location.pathname + location.search); }catch(e){}
  }
}
function switchTab(t){
  stopAudio();
  const sameTab=(state.tab===t);
  state.activeWordId=null;
  state.scDone=false;
  state.scAnim='';
  if(t==='lessons'){
    state.activePack=null;
    state.quizMask=false;
    clearHashSafely();
  }else{
    state.activePack=null;
    clearHashSafely();
    if(t==='review' && sameTab && state.session){
      state.session=null;
    }
  }
  state.tab=t;
  state.limit=45;
  document.querySelectorAll('.btab').forEach(b=>b.classList.toggle('active', b.dataset.tab===t));
  window.scrollTo({top:0, behavior:'instant'});
  renderApp();
}
function openPack(pk, fromPop=false){
  stopAudio();
  state.tab='lessons';
  state.activePack=pk;
  state.packFilter='all';
  state.onlyUnmastered=false;
  state.scDone=false;
  state.scAnim='';
  state.limit=60;
  if(!fromPop){ try{ history.pushState({pk}, '', '#'+pk); }catch(e){} }
  document.querySelectorAll('.btab').forEach(b=>b.classList.toggle('active', b.dataset.tab==='lessons'));
  window.scrollTo({top:0, behavior:'instant'});
  renderApp();
  if(prefs.studyLayout==='cards' && prefs.cardAutoAudio!==false){
    scheduleCardAutoSpeak(130);
  }
}
function goBack(fromPop=false){
  stopAudio();
  if(state.activeWordId){
    state.activeWordId=null;
    state.tab=state.wordReturnTab||state.tab;
    if(!fromPop) clearHashSafely();
    window.scrollTo({top:0, behavior:'instant'});
    renderApp();
    return;
  }
  if(state.tab==='review' && state.session){
    state.session=null;
    window.scrollTo({top:0, behavior:'instant'});
    renderApp();
    return;
  }
  state.activePack=null;
  state.quizMask=false;
  state.scDone=false;
  state.scAnim='';
  if(!fromPop) clearHashSafely();
  window.scrollTo({top:0, behavior:'instant'});
  renderApp();
}
window.addEventListener('popstate', ()=>{
  stopAudio();
  if(document.getElementById('settingsModal').classList.contains('open')){
    closeSettings(); return;
  }
  if(state.activeWordId){
    state.activeWordId=null;
    state.tab=state.wordReturnTab||state.tab;
    window.scrollTo({top:0, behavior:'instant'});
    renderApp(); return;
  }
  if(state.tab==='review' && state.session){
    state.session=null; renderApp(); return;
  }
  if(state.activePack){
    state.activePack=null;
    state.quizMask=false;
    state.scDone=false;
    state.scAnim='';
    window.scrollTo({top:0, behavior:'instant'});
    renderApp();
  }
});

function startDeckReview(pk){
  stopAudio();
  state.activePack=null;
  state.scDone=false;
  clearHashSafely();
  state.revDeck=pk;
  state.tab='review';
  document.querySelectorAll('.btab').forEach(b=>b.classList.toggle('active', b.dataset.tab==='review'));
  startFlashcardSession();
}

// =========================================================
// CARD RENDERING HELPERS
// =========================================================
function parse6(str){
  if(!str) return {};
  const out={};
  str.split(/[؛;]/).map(s=>s.trim()).filter(Boolean).forEach(p=>{
    const m=p.match(/^([^:]+):\s*(.*)$/);
    if(m) out[m[1].trim()]=m[2].trim();
  });
  return out;
}

function renderClickableSentence(sentence){
  return String(sentence||'').split(/([A-Za-zÄÖÜäöüß]+)/g).map(tok=>{
    if(/^[A-Za-zÄÖÜäöüß]{2,}$/.test(tok)){
      return `<span class="tok" data-say="${esc(tok)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)" onmouseenter="onHoverSay(this.dataset.say,this)" onmouseleave="onLeaveSay()">${esc(tok)}</span>`;
    }
    return esc(tok);
  }).join('');
}

function renderConjGridHtml(x, tense){
  const raw=(tense==='pr'?x.vp:(tense==='pt'?x.vpt:(tense==='pf'?x.vpf:(tense==='plq'?x.vplq:x.vk2t))));
  const map=parse6(raw);
  const ordered=['ich','wir','du','ihr','er/sie/es','sie/Sie'];
  return ordered.map(p=>{
    const v=map[p]||'—';
    if(!v || v==='—'){
      return `<div class="ccell empty"><span class="cp">${p}</span><span class="cv">—</span></div>`;
    }
    const pron=p.split('/')[0];
    const phrase=/^es\s/i.test(v)?v:`${pron} ${v}`;
    return `<div class="ccell" data-say="${esc(phrase)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)"><span class="cp">${p}</span><span class="cv">${esc(v)}</span></div>`;
  }).join('');
}

function switchConjTab(btn, id, tense){
  const box=btn.closest('.conj-box');
  box.querySelectorAll('.ctab').forEach(b=>b.classList.toggle('active', b===btn));
  const found=ID_INDEX.get(id);
  const item=found?found.item:DATA.find(d=>d.id===id);
  if(item) box.querySelector('.conj-grid').innerHTML=renderConjGridHtml(item, tense);
}
function toggleConjBox(btn){
  const box=btn.closest('.conj-box');
  const open=box.classList.toggle('open');
  btn.querySelector('.c-arr').textContent=open?'▴ بستن':'▾ باز کردن';
}

function renderArticlePill(a){
  if(a==='der') return '<span class="art-pill art-der">der</span>';
  if(a==='die') return '<span class="art-pill art-die">die</span>';
  if(a==='das') return '<span class="art-pill art-das">das</span>';
  if(a==='das*') return '<span class="art-pill art-das" title="نام کشور معمولاً بی‌آرتیکل">das*</span>';
  if(a==='pl') return '<span class="art-pill art-pl">die (Pl.)</span>';
  if(a && a.includes('/')) return `<span class="art-pill art-dual">${esc(a)}</span>`;
  return '';
}

function renderB2Badges(x){
  if(!prefs.showB2Grammar) return '';
  let h='';
  if(x.k==='noun' && x.nd){
    if(x.nd==='n-dekl') h+='<span class="tag tag-ndekl">⚠️ اسم ضعیف (<bdi dir="ltr">n-Dekl.</bdi>)</span>';
    else if(x.nd==='n-dekl-ns') h+='<span class="tag tag-ndekl">⚠️ اسم ضعیف (<bdi dir="ltr">-ns</bdi>)</span>';
    else if(x.nd==='n-dekl-opt') h+='<span class="tag tag-ndekl">⚠️ ضعیف (شخص)</span>';
    else if(x.nd==='adj') h+='<span class="tag tag-adjdecl">⚠️ صرف صفتی</span>';
  }
  if(x.k==='verb' && x.vnoge){
    h+=`<span class="tag tag-noge">🔹 ${escBidi(x.vnoge)} (بدون <bdi dir="ltr">ge-</bdi>)</span>`;
  }
  if(x.k==='other' && x.gl && x.gt){
    h+=`<span class="tag tag-gr-${esc(x.gt)}">${escBidi(x.gl)}</span>`;
  }
  return h;
}

function renderCardDetails(x, opts={}){
  const showB2=!!prefs.showB2Grammar;
  let html='';
  if(x.k==='noun'){
    if(x.pl){
      const isDePl=!/[\u0600-\u06FF]/.test(x.pl);
      if(isDePl){
        html+=`<div class="plural-strip">
          <span class="pl-lbl">جمع</span>
          <span class="pl-val" data-say="${esc(x.pl)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)" onmouseenter="onHoverSay(this.dataset.say,this)" onmouseleave="onLeaveSay()">${esc(x.pl)}</span>
          <button class="spk sm" data-say="${esc(x.pl)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)" title="تلفظ جمع">🔊</button>
        </div>`;
      }else{
        html+=`<div class="plural-strip"><span class="pl-lbl">جمع</span><span class="pl-val-fa">${escBidi(x.pl)}</span></div>`;
      }
    }
    if(showB2 && x.gn){
      const genLbl=(x.a==='pl')?'ملکی جمع (<bdi dir="ltr">Gen. Pl.</bdi>)':'ملکی مفرد (<bdi dir="ltr">Gen.</bdi>)';
      const isDeGn=!/[\u0600-\u06FF]/.test(x.gn);
      if(isDeGn){
        const sayGn=x.gn.replace(/\([^)]*\)/g,'').split('/')[0].trim();
        html+=`<div class="gen-strip">
          <span class="gen-lbl">${genLbl}</span>
          <span class="gen-val" data-say="${esc(sayGn)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)">${esc(x.gn)}</span>
          <button class="spk sm" data-say="${esc(sayGn)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)" title="تلفظ حالت ملکی">🔊</button>
        </div>`;
      }else{
        html+=`<div class="gen-strip"><span class="gen-lbl">${genLbl}</span><span class="gen-val-fa">${escBidi(x.gn)}</span></div>`;
      }
    }
    if(showB2 && x.nd && x.ndd){
      const isAdj=(x.nd==='adj');
      const ttl=isAdj?'صرف صفتی':'اسم ضعیف (<bdi class="de-iso" dir="ltr">n-Dekl.</bdi>)';
      html+=renderNddBox(isAdj, ttl, x.ndd);
    }
    if(showB2 && x.np){
      html+=renderValenzBox('حرف اضافه', x.np);
    }
  }
  if(x.k==='verb'){
    const prMap=parse6(x.vp);
    const erForm=prMap['er/sie/es']||'';
    const stammItems=[];
    if(erForm && erForm!=='—'){
      const erSay=/^es\s/i.test(erForm)?erForm:`er ${erForm}`;
      stammItems.push(`<span class="stamm-pill" data-say="${esc(erSay)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)"><small>er/sie</small><b>${esc(erForm)}</b></span>`);
    }
    if(x.vpr && x.vpr!=='—'){
      stammItems.push(`<span class="stamm-pill" data-say="${esc(x.vpr)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)"><small>Prät.</small><b>${esc(x.vpr)}</b></span>`);
    }
    if(x.vpe && x.vpe!=='—'){
      stammItems.push(`<span class="stamm-pill" data-say="${esc(x.vpe)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)"><small>Perf.</small><b>${esc(x.vpe)}</b></span>`);
    }
    if(stammItems.length) html+=`<div class="stamm-row">${stammItems.join('')}</div>`;
    if(x.vv && x.vv!=='—' && !x.vv.startsWith('بدون مفعول')){
      html+=renderValenzBox('ساختار فعل', x.vv);
    }
    if(showB2){
      const rows=[];
      if(x.vimp){
        const sayImp=x.vimp.split('·')[0].replace(/^du:\s*/,'').replace(/\([^)]*\)/g,'').trim();
        rows.push(`<div class="b2v-row"><span class="b2v-lbl">امری (<bdi dir="ltr">Imp.</bdi>)</span><span class="b2v-val de" data-say="${esc(sayImp)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)">${esc(x.vimp)}</span></div>`);
      }
      if(x.vk2){
        const k2Html=x.vk2p && x.vk2p!=='—'?`<bdi class="de-iso" dir="ltr">${esc(x.vk2)}</bdi> <span style="color:var(--muted);font-weight:600">· گذشته:</span> <bdi class="de-iso" dir="ltr">${esc(x.vk2p)}</bdi>`:`<bdi class="de-iso" dir="ltr">${esc(x.vk2)}</bdi>`;
        const sayK2=x.vk2.split('/')[0].replace(/\([^)]*\)/g,'').trim();
        rows.push(`<div class="b2v-row"><span class="b2v-lbl">التزامی ۲ (<bdi dir="ltr">Konj. II</bdi>)</span><span class="b2v-val k2-mix" data-say="${esc(sayK2)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)">${k2Html}</span></div>`);
      }
      if(x.vk1 && x.vk1!=='—'){
        const sayK1=x.vk1.split('/')[0].replace(/^er\/sie\s+/,'er ').trim();
        rows.push(`<div class="b2v-row"><span class="b2v-lbl">التزامی ۱ (نقل‌قول)</span><span class="b2v-val de" data-say="${esc(sayK1)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)">${esc(x.vk1)}</span></div>`);
      }
      if(x.vpv){
        const pvCls=x.vptp==='yes'?'pv-yes':(x.vptp==='imp'?'pv-imp':'pv-no');
        rows.push(`<div class="b2v-row"><span class="b2v-lbl ${pvCls}">مجهول (<bdi class="de-iso" dir="ltr">Passiv</bdi>)</span><span class="b2v-val">${renderVpvValue(x.vpv)}</span></div>`);
      }
      if(x.vzu){
        rows.push(`<div class="b2v-row"><span class="b2v-lbl">ساختار مصدر</span><span class="b2v-val">${renderVzuValue(x.vzu)}</span></div>`);
      }
      if(rows.length) html+=`<div class="b2-verb-panel">${rows.join('')}</div>`;
    }
  }
  if(x.k==='adj'){
    if(x.ac || x.as){
      html+=`<div class="adj-scale">
        <span class="adj-step" data-say="${esc(x.lm)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)">${esc(x.lm)}</span>
        <span class="adj-arr">→</span>
        <span class="adj-step" data-say="${esc(x.ac||'')}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)">${esc(x.ac||'—')}</span>
        <span class="adj-arr">→</span>
        <span class="adj-step" data-say="${esc(x.as||'')}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)">${esc(x.as||'—')}</span>
      </div>`;
    }
    if(x.aa){
      const firstAnt=x.aa.split(/[؛;]/)[0].trim();
      html+=`<button class="ant-chip" data-say="${esc(firstAnt)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)">↔ متضاد: <b>${esc(x.aa)}</b> 🔊</button>`;
    }
    if(showB2 && x.ap){
      html+=renderValenzBox('حرف اضافه', x.ap);
    }
    if(showB2 && x.ad){
      html+=renderAdjTip(x.ad);
    }
  }
  if(x.k==='other' && showB2 && x.gd){
    html+=`<div class="b2-rule gr-${esc(x.gt||'special')}"><b>📘 ${escBidi(x.gl||'نکتهٔ دستوری')}</b><div>${renderLinesWithBidi(x.gd)}</div></div>`;
  }
  return html;
}

function renderExampleBox(x, masked=false){
  if(!x.ex) return '';
  return `<div class="ex-box">
    <div class="ex-top">
      <div class="ex-de">${renderClickableSentence(x.ex)}</div>
      <div class="ex-btns">
        <button class="spk sm" data-say="${esc(x.ex)}" onclick="event.stopPropagation();speakDe(this.dataset.say,this)" title="پخش جمله">🔊</button>
      </div>
    </div>
    ${x.exf?`<div class="ex-fa ${masked?'masked':''}" onclick="if(this.classList.contains('masked')){event.stopPropagation();this.classList.toggle('revealed');}">${escBidi(x.exf)}</div>`:''}
  </div>`;
}

function renderConjBox(x, openDefault=false){
  if(x.k!=='verb') return '';
  const showB2=!!prefs.showB2Grammar;
  const tabsHtml=showB2?`
      <div class="conj-tabs t5">
        <button class="ctab active" onclick="event.stopPropagation();switchConjTab(this,'${esc(x.id)}','pr')">حال (<bdi dir="ltr">Präs.</bdi>)</button>
        <button class="ctab" onclick="event.stopPropagation();switchConjTab(this,'${esc(x.id)}','pt')">گذشته (<bdi dir="ltr">Prät.</bdi>)</button>
        <button class="ctab" onclick="event.stopPropagation();switchConjTab(this,'${esc(x.id)}','pf')">نقلی (<bdi dir="ltr">Perf.</bdi>)</button>
        <button class="ctab" onclick="event.stopPropagation();switchConjTab(this,'${esc(x.id)}','plq')">بعید (<bdi dir="ltr">Plusq.</bdi>)</button>
        <button class="ctab" onclick="event.stopPropagation();switchConjTab(this,'${esc(x.id)}','k2')">التزامی (<bdi dir="ltr">Konj. II</bdi>)</button>
      </div>`:`
      <div class="conj-tabs">
        <button class="ctab active" onclick="event.stopPropagation();switchConjTab(this,'${esc(x.id)}','pr')">Präsens</button>
        <button class="ctab" onclick="event.stopPropagation();switchConjTab(this,'${esc(x.id)}','pt')">Präteritum</button>
        <button class="ctab" onclick="event.stopPropagation();switchConjTab(this,'${esc(x.id)}','pf')">Perfekt</button>
      </div>`;
  const titleTxt=showB2?'⚡ صرف ۶شخصی ۵زمانه تا B2 (کلیک = تلفظ)':'⚡ صرف ۶شخصی (کلیک روی هر شخص = تلفظ)';
  return `<div class="conj-box ${openDefault?'open':''}">
    <button class="conj-toggle" onclick="event.stopPropagation();toggleConjBox(this)">
      <span>${titleTxt}</span>
      <span class="c-arr">${openDefault?'▴ بستن':'▾ باز کردن'}</span>
    </button>
    <div class="conj-body">
      ${tabsHtml}
      <div class="conj-grid">${renderConjGridHtml(x,'pr')}</div>
    </div>
  </div>`;
}

function quickMarkCard(id, grade, btn){
  const found=ID_INDEX.get(id);
  const item=found?found.item:DATA.find(d=>d.id===id);
  const itemLvl=found?found.lvl:activeLevel;
  if(!item) return;
  const res=updateItemProgressForLevel(item, grade==='know'?'easy':'again', itemLvl);
  const card=btn.closest('.wcard, .sc-card');
  if(card){
    card.classList.toggle('is-mastered', res.box>=4);
    const pill=card.querySelector('.m-pill');
    if(pill){
      if(res.box>=4){ pill.textContent='✓ مسلط'; pill.className='m-pill st-ok'; }
      else{ pill.textContent=`جعبه ${faNum(res.box)} · مرور`; pill.className='m-pill st-learn'; }
    }
    card.querySelectorAll('.m-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  }
  updatePackBannerLive();
  const lvlNote=(itemLvl!==activeLevel)?` (${itemLvl})`:'';
  showToast(item.lm, (grade==='know'?'✓ ثبت به عنوان مسلط':'↻ افزوده به صف مرور')+lvlNote, grade==='know'?'t-human':'t-load', 1500);
}

function renderWordCard(x, opts={}){
  const masked=!!opts.quizMask;
  const p=getEntry(x);
  const mastered=!!(p && p.box>=4);
  const inReview=!!(p && p.box===1);

  let accent='accent-oth';
  if(x.k==='noun'){
    if(x.a==='der') accent='accent-der';
    else if(x.a==='die') accent='accent-die';
    else if(x.a==='das'||x.a==='das*') accent='accent-das';
    else if(x.a==='pl') accent='accent-pl';
  }else if(x.k==='verb') accent='accent-verb';
  else if(x.k==='adj') accent='accent-adj';

  let tagsHtml='';
  if(x.k==='verb' && x.vtg && x.vtg.length){
    tagsHtml+=x.vtg.map(t=>`<span class="tag tag-verb">${esc(t)}</span>`).join('');
  }else if(x.k==='adj' && x.ag){
    tagsHtml+=`<span class="tag tag-adj">صفت · ${esc(x.ag)}</span>`;
  }else if(x.pos && x.k==='other'){
    tagsHtml+=`<span class="tag">${esc(x.pos)}</span>`;
  }
  tagsHtml+=renderB2Badges(x);
  if(!state.activePack){
    tagsHtml+=getPackTagHtml(x);
  }

  let statusHtml='<span class="m-pill">تازه</span>';
  if(p){
    if(p.box>=4) statusHtml='<span class="m-pill st-ok">✓ مسلط</span>';
    else statusHtml=`<span class="m-pill st-learn">جعبه ${faNum(p.box)}</span>`;
  }

  let extLinksHtml='';
  if(prefs.showExtLinks){
    const cw=extractSingleWord(x.lm) || cleanSpeakText(x.lm.split('/')[0]);
    extLinksHtml=`<div class="ext-links">
      <a class="ext-a" href="https://forvo.com/word/${encodeURIComponent(cw)}/#de" target="_blank" rel="noopener">Forvo ↗</a>
      <a class="ext-a" href="https://www.duden.de/suchen/dudenonline/${encodeURIComponent(cw)}" target="_blank" rel="noopener">Duden ↗</a>
    </div>`;
  }

  const noteHtml=(prefs.showNotes && x.nt)?`<div class="wc-note">💡 ${renderLinesWithBidi(x.nt)}</div>`:'';

  return `<article class="wcard ${accent} ${mastered?'is-mastered':''}">
    <div class="wc-head">
      <div class="wc-de-side">
        <div class="wc-word-line">
          ${renderArticlePill(x.a)}
          <button class="lemma-btn" data-say="${esc(x.lm)}" onclick="speakDe(this.dataset.say,this)" onmouseenter="onHoverSay(this.dataset.say,this)" onmouseleave="onLeaveSay()">${esc(x.lm)}</button>
        </div>
      </div>
      <div class="wc-audio-btns">
        <button class="spk" data-say="${esc(x.lm)}" onclick="speakDe(this.dataset.say,this)" title="تلفظ">🔊</button>
      </div>
    </div>
    ${tagsHtml?`<div class="wc-tags">${tagsHtml}</div>`:''}
    ${renderCardDetails(x)}
    <div class="meaning ${masked?'masked':''}" onclick="if(this.classList.contains('masked'))this.classList.toggle('revealed')">${escBidi(x.mn)}</div>
    ${renderExampleBox(x, masked)}
    ${renderConjBox(x)}
    ${noteHtml}
    <div class="wc-foot">
      <div class="m-actions">
        ${statusHtml}
        <button class="m-btn know ${mastered?'active':''}" onclick="quickMarkCard('${esc(x.id)}','know',this)">✓ بلدم</button>
        <button class="m-btn again ${inReview?'active':''}" onclick="quickMarkCard('${esc(x.id)}','again',this)">↻ مرور</button>
      </div>
      ${extLinksHtml}
    </div>
  </article>`;
}

// =========================================================
// VIEW 1: LESSONS HOME & PACK DETAIL
// =========================================================
function getPackItems(pk){
  if(!pk) return [];
  const lvlCache=PACK_CACHE[activeLevel]||(PACK_CACHE[activeLevel]={});
  if(lvlCache[pk]) return lvlCache[pk];
  let res=[];
  if(pk.startsWith('L')) res=DATA.filter(x=>x.pk===pk).sort((a,b)=>cmpDe(a.lm, b.lm));
  else if(pk==='goethe' || pk==='gram') res=DATA.filter(x=>x.pk===pk && x.uq).sort((a,b)=>cmpDe(a.lm.replace(/^[\(\s]+/,''), b.lm.replace(/^[\(\s]+/,'')));
  else if(pk==='telc' || pk==='ecl') res=DATA.filter(x=>x.pk===pk && x.uq).sort((a,b)=>cmpDe(a.lm, b.lm));
  lvlCache[pk]=res;
  return res;
}

function renderLessonsHome(){
  const cfg=getLevelCfg();
  document.getElementById('backBtn').classList.remove('show');
  document.getElementById('topTitle').textContent=cfg.topTitle;
  document.getElementById('topSub').textContent=prefs.includeExtra?cfg.topSubAll:cfg.topSubEss;

  const scoped=getScopedUnique();
  const st=calcPackStats(scoped);
  const streak=getDisplayStreak();

  let html=`
    <section class="hero">
      <div class="hero-top">
        <div>
          <h2>مسیر درس ۱ تا ۱۲ · سطح ${activeLevel}</h2>
          <p>پیشرفت هر سطح به‌صورت مجزا و خودکار ذخیره می‌شود.</p>
        </div>
        <span class="hero-pill">🔥 ${faNum(streak)} روز</span>
      </div>
      <div class="hero-prog">
        <div class="hero-prog-lbl"><span>تسلط کل بر بستهٔ فعال ${activeLevel}</span><span>${faNum(st.mastered)} از ${faNum(st.total)} (${faNum(st.pct)}٪)</span></div>
        <div class="hero-bar"><div class="hero-bar-fill" style="width:${st.pct}%"></div></div>
      </div>
      <div class="hero-stats">
        <button class="hstat" onclick="switchTab('review')"><b>${faNum(st.due)}</b><span>سررسید مرور</span></button>
        <button class="hstat" onclick="switchTab('review')"><b>${faNum(getTodayCount())}</b><span>مرور امروز</span></button>
        <button class="hstat" onclick="switchTab('verbs')"><b>${faNum(scoped.filter(x=>x.k==='verb').length)}</b><span>فعل ۶شخصی</span></button>
      </div>
    </section>

    <div class="sec-lbl"><span>${cfg.secLessonsTitle}</span><small>${cfg.secLessonsSub}</small></div>
    <div class="lesson-grid">
  `;

  LESSON_META.forEach(lm=>{
    const items=getPackItems(lm.pk);
    const ls=calcPackStats(items);
    html+=`<button class="lcard" onclick="openPack('${lm.pk}')">
      <div>
        <div class="lcard-top"><span class="lnum">${lm.num}</span><span class="lcnt">${faNum(ls.total)} واژه</span></div>
        <div class="ltitle">${escBidi(lm.title)}</div>
        <div class="lsub">${escBidi(lm.sub)}</div>
      </div>
      <div class="lprog-wrap">
        <div class="lprog-row"><span>${faNum(ls.mastered)}/${faNum(ls.total)} مسلط</span><span class="lprog-pct">${faNum(ls.pct)}٪</span></div>
        <div class="lbar"><div class="lbar-fill ${ls.pct===100?'done':''}" style="width:${ls.pct}%"></div></div>
      </div>
    </button>`;
  });
  html+=`</div>`;

  const pe=cfg.primaryExtra;
  const gSt=calcPackStats(getPackItems(pe.pk));
  html+=`
    <div class="sec-lbl"><span>${pe.secTitle}</span><small>${pe.secSub}</small></div>
    <button class="pack-card" onclick="openPack('${pe.pk}')">
      <div class="pack-ico">${pe.ico}</div>
      <div class="pack-body">
        <div class="pack-title">${pe.title}</div>
        <div class="pack-desc">${pe.descPrefix} · پیشرفت: ${faNum(gSt.mastered)}/${faNum(gSt.total)} (${faNum(gSt.pct)}٪)</div>
        <div class="lbar" style="margin-top:6px"><div class="lbar-fill ${gSt.pct===100?'done':''}" style="width:${gSt.pct}%"></div></div>
      </div>
      <span class="pack-arr">‹</span>
    </button>
  `;

  if(prefs.includeExtra && cfg.optionalExtras.length){
    if(activeLevel!=='B2'){
      html+=`<div class="sec-lbl"><span>📦 بسته‌های تکمیلی ${activeLevel} (فعال‌شده از تنظیمات)</span></div>`;
    }
    cfg.optionalExtras.forEach(opt=>{
      const oSt=calcPackStats(getPackItems(opt.pk));
      html+=`
        <button class="pack-card extra" onclick="openPack('${opt.pk}')" style="margin-top:9px">
          <div class="pack-ico">${opt.ico}</div>
          <div class="pack-body">
            <div class="pack-title">${opt.titlePrefix} (${faNum(oSt.total)} واژه)</div>
            <div class="pack-desc">${opt.descPrefix} · پیشرفت: ${faNum(oSt.mastered)}/${faNum(oSt.total)} (${faNum(oSt.pct)}٪)</div>
            <div class="lbar" style="margin-top:5px"><div class="lbar-fill ${oSt.pct===100?'done':''}" style="width:${oSt.pct}%"></div></div>
          </div>
          <span class="pack-arr">‹</span>
        </button>
      `;
    });
  }
  document.getElementById('appView').innerHTML=html;
}

function updatePackBannerLive(){
  if(!state.activePack) return;
  const items=getPackItems(state.activePack);
  const st=calcPackStats(items);
  const txt=document.getElementById('packBannerTxt');
  const bar=document.getElementById('packBannerFill');
  const mc=document.getElementById('scMasteryChip');
  if(txt) txt.innerHTML=`<span>تسلط این درس: ${faNum(st.mastered)} از ${faNum(st.total)}</span><span>${faNum(st.pct)}٪</span>`;
  if(bar) bar.style.width=st.pct+'%';
  if(mc) mc.textContent=`تسلط: ${faNum(st.pct)}٪`;
}

// =========================================================
// SINGLE-CARD HORIZONTAL SWIPE ENGINE (v1.2)
// =========================================================
let scAutoTimer=null;
let scCurrentList=[];
let scContext='pack'; // 'pack' | 'verbs'

function getPackIdx(pk){
  if(!prefs.packIdx || typeof prefs.packIdx!=='object') prefs.packIdx={};
  return Number(prefs.packIdx[pk]||0);
}
function setPackIdx(pk, val){
  if(!prefs.packIdx || typeof prefs.packIdx!=='object') prefs.packIdx={};
  prefs.packIdx[pk]=Math.max(0, val);
  savePrefs();
}

function getActiveDeckIdx(){
  return scContext==='verbs' ? state.verbIdx : getPackIdx(state.activePack);
}
function setActiveDeckIdx(val){
  if(scContext==='verbs') state.verbIdx=Math.max(0, val);
  else if(state.activePack) setPackIdx(state.activePack, val);
}

function setStudyLayout(mode){
  prefs.studyLayout=mode;
  savePrefs();
  state.scDone=false;
  state.scAnim='';
  stopAudio();
  renderPackDetail();
  if(mode==='cards' && prefs.cardAutoAudio!==false) scheduleCardAutoSpeak(140);
}

function setVerbLayout(mode){
  prefs.verbLayout=mode;
  savePrefs();
  state.scDone=false;
  state.scAnim='';
  stopAudio();
  renderVerbsTab();
  if(mode==='cards' && prefs.cardAutoAudio!==false) scheduleCardAutoSpeak(140);
}

function toggleCardAutoAudio(){
  prefs.cardAutoAudio=(prefs.cardAutoAudio===false);
  savePrefs();
  const btn=document.getElementById('scAutoBtn');
  if(btn){
    btn.classList.toggle('on', prefs.cardAutoAudio);
    btn.textContent=prefs.cardAutoAudio?'🔊 خودکار':'🔇 بی‌صدا';
  }
  showToast(prefs.cardAutoAudio?'پخش خودکار تلفظ فعال شد':'تلفظ خودکار خاموش شد', prefs.cardAutoAudio?'🔊 خودکار':'🔇 دستی', 't-tts', 1500);
}

function prefetchNextCardsAudio(list, idx){
  if(!canPlayOgg || prefs.audioMode!=='human_first') return;
  for(const offset of [1, 2]){
    const nxt=list[idx+offset];
    if(!nxt) continue;
    const w=extractSingleWord(nxt.lm);
    if(w) findHumanAudio(w).catch(()=>{});
    if(nxt.pl){
      const pw=extractSingleWord(nxt.pl);
      if(pw) findHumanAudio(pw).catch(()=>{});
    }
  }
}

function scheduleCardAutoSpeak(delay=110){
  clearTimeout(scAutoTimer);
  scAutoTimer=setTimeout(()=>{
    if(prefs.cardAutoAudio===false || state.scDone) return;
    if(scContext==='pack' && (state.tab!=='lessons' || !state.activePack || prefs.studyLayout!=='cards')) return;
    if(scContext==='verbs' && (state.tab!=='verbs' || prefs.verbLayout!=='cards')) return;
    const idx=getActiveDeckIdx();
    const item=scCurrentList[idx];
    if(!item) return;
    const lemmaEl=document.getElementById('scLemmaBtn');
    speakDe(item.lm, lemmaEl);
    prefetchNextCardsAudio(scCurrentList, idx);
  }, delay);
}

function scGo(delta, fromSwipe=false){
  if(!scCurrentList.length) return;
  clearTimeout(scAutoTimer);
  stopAudio();
  const curIdx=getActiveDeckIdx();
  const target=curIdx + delta;
  if(target < 0) return;
  if(target >= scCurrentList.length){
    state.scDone=true;
    state.scAnim='';
    if(scContext==='verbs') renderVerbsTab();
    else renderPackDetail();
    return;
  }
  state.scDone=false;
  state.scAnim=delta>0?'next':'prev';
  setActiveDeckIdx(target);
  if(scContext==='verbs') renderVerbsTab();
  else renderPackDetail();
  if(prefs.cardAutoAudio!==false){
    scheduleCardAutoSpeak(fromSwipe?75:115);
  }else{
    prefetchNextCardsAudio(scCurrentList, target);
  }
}

function scScrubPreview(idxVal){
  const n=parseInt(idxVal, 10);
  if(isNaN(n) || !scCurrentList.length) return;
  const c=document.getElementById('scCounter');
  const f=document.getElementById('scTrackFill');
  if(c) c.textContent=`${faNum(n+1)} از ${faNum(scCurrentList.length)}`;
  if(f) f.style.width=`${Math.round(((n+1)/scCurrentList.length)*100)}%`;
}

function scJumpTo(idxVal){
  const n=parseInt(idxVal, 10);
  if(isNaN(n) || !scCurrentList.length) return;
  const clamped=Math.max(0, Math.min(scCurrentList.length-1, n));
  if(clamped===getActiveDeckIdx() && !state.scDone) return;
  clearTimeout(scAutoTimer);
  stopAudio();
  state.scDone=false;
  state.scAnim='';
  setActiveDeckIdx(clamped);
  if(scContext==='verbs') renderVerbsTab();
  else renderPackDetail();
  if(prefs.cardAutoAudio!==false) scheduleCardAutoSpeak(120);
}

function scRestartDeck(){
  clearTimeout(scAutoTimer);
  stopAudio();
  state.scDone=false;
  state.scAnim='prev';
  setActiveDeckIdx(0);
  if(scContext==='verbs') renderVerbsTab();
  else renderPackDetail();
  if(prefs.cardAutoAudio!==false) scheduleCardAutoSpeak(120);
}

function scReplayCurrent(){
  const idx=getActiveDeckIdx();
  const item=scCurrentList[idx];
  if(!item) return;
  const lemmaEl=document.getElementById('scLemmaBtn');
  speakDe(item.lm, lemmaEl);
}

function renderSingleFocusCard(x, opts={}){
  const itemLvl=opts.itemLevel||activeLevel;
  const masked=!!state.quizMask;
  const p=getEntryForLevel(x, itemLvl);
  const mastered=!!(p && p.box>=4);
  const inReview=!!(p && p.box===1);

  let accent='accent-oth';
  if(x.k==='noun'){
    if(x.a==='der') accent='accent-der';
    else if(x.a==='die') accent='accent-die';
    else if(x.a==='das'||x.a==='das*') accent='accent-das';
    else if(x.a==='pl') accent='accent-pl';
  }else if(x.k==='verb') accent='accent-verb';
  else if(x.k==='adj') accent='accent-adj';

  let tagsHtml='';
  if(x.k==='verb' && x.vtg && x.vtg.length){
    tagsHtml+=x.vtg.map(t=>`<span class="tag tag-verb">${esc(t)}</span>`).join('');
  }else if(x.k==='adj' && x.ag){
    tagsHtml+=`<span class="tag tag-adj">صفت · ${esc(x.ag)}</span>`;
  }else if(x.pos){
    tagsHtml+=`<span class="tag">${esc(x.pos)}</span>`;
  }
  tagsHtml+=renderB2Badges(x);
  if(scContext==='verbs' || opts.showPackTag){
    if(opts.showLevelBadge) tagsHtml+=`<span class="lvl-badge lb-${itemLvl}">${itemLvl}</span>`;
    tagsHtml+=getPackTagHtml(x, itemLvl);
  }

  let statusHtml='<span class="m-pill">تازه</span>';
  if(p){
    if(p.box>=4) statusHtml='<span class="m-pill st-ok">✓ مسلط</span>';
    else statusHtml=`<span class="m-pill st-learn">جعبه ${faNum(p.box)}</span>`;
  }

  let extLinksHtml='';
  if(prefs.showExtLinks){
    const cw=extractSingleWord(x.lm) || cleanSpeakText(x.lm.split('/')[0]);
    extLinksHtml=`<div class="ext-links">
      <a class="ext-a" href="https://forvo.com/word/${encodeURIComponent(cw)}/#de" target="_blank" rel="noopener">Forvo ↗</a>
      <a class="ext-a" href="https://www.duden.de/suchen/dudenonline/${encodeURIComponent(cw)}" target="_blank" rel="noopener">Duden ↗</a>
    </div>`;
  }

  const noteHtml=((prefs.showNotes || opts.showPackTag) && x.nt)?`<div class="wc-note">💡 ${renderLinesWithBidi(x.nt)}</div>`:'';
  const animCls=state.scAnim==='next'?'sc-anim-next':(state.scAnim==='prev'?'sc-anim-prev':'');
  state.scAnim='';

  return `<article id="scCard" class="sc-card ${accent} ${mastered?'is-mastered':''} ${animCls}">
    <div id="scDirBadge" class="sc-dir-badge"></div>
    <div class="sc-accent-top"></div>
    <div class="sc-card-in">
      <div class="sc-meta">
        <div class="sc-meta-tags">${tagsHtml}</div>
        ${statusHtml}
      </div>
      <div class="sc-hero">
        <div class="sc-de-row">
          ${renderArticlePill(x.a)}
          <button id="scLemmaBtn" class="sc-lemma-btn" data-say="${esc(x.lm)}" onclick="speakDe(this.dataset.say,this)">${esc(x.lm)}</button>
          <button class="spk" data-say="${esc(x.lm)}" onclick="speakDe(this.dataset.say,this)" title="تلفظ">🔊</button>
        </div>
      </div>
      ${renderCardDetails(x)}
      <div class="sc-meaning-wrap">
        <div class="sc-meaning ${masked?'masked':''}" onclick="if(this.classList.contains('masked'))this.classList.toggle('revealed')">${escBidi(x.mn)}</div>
      </div>
      ${renderExampleBox(x, masked)}
      ${renderConjBox(x, !!opts.openConj)}
      ${noteHtml}
      <div class="wc-foot">
        <div class="m-actions">
          <button class="m-btn know ${mastered?'active':''}" onclick="quickMarkCard('${esc(x.id)}','know',this)">✓ بلدم</button>
          <button class="m-btn again ${inReview?'active':''}" onclick="quickMarkCard('${esc(x.id)}','again',this)">↻ مرور</button>
        </div>
        ${extLinksHtml}
      </div>
    </div>
  </article>`;
}

function renderSingleCardStage(list, deckTitle, masteryPct){
  scCurrentList=list;
  if(!list.length){
    return `<div class="empty-state">${state.onlyUnmastered?'🎉 آفرین! همهٔ واژگان این بخش را بلدی.':'موردی در این دسته وجود ندارد.'}</div>`;
  }
  let idx=getActiveDeckIdx();
  if(idx >= list.length){ idx=list.length-1; setActiveDeckIdx(idx); }
  if(idx < 0){ idx=0; setActiveDeckIdx(0); }

  if(state.scDone){
    const deckKey=scContext==='verbs'?'verbs':state.activePack;
    return `<div class="sc-done">
      <div class="sc-done-ico">🎉</div>
      <h3>پایان ${esc(deckTitle)}!</h3>
      <p>همهٔ ${faNum(list.length)} کلمهٔ این بخش را ورق زدی.${masteryPct!==null?` تسلط فعلی: ${faNum(masteryPct)}٪`:''}</p>
      <div class="sc-done-btns">
        <button class="start-btn" style="margin-top:0" onclick="startDeckReview('${esc(deckKey)}')">🃏 شروع آزمون فلش‌کارت و آرتیکل</button>
        <button class="btn-more" style="margin-top:0" onclick="scRestartDeck()">🔄 مرور دوباره از کلمهٔ اول</button>
        ${scContext==='pack'?'<button class="sc-nbtn" style="width:100%" onclick="goBack()">📚 بازگشت به لیست درس‌ها</button>':''}
      </div>
    </div>`;
  }

  const item=list[idx];
  const pct=Math.round(((idx+1)/list.length)*100);
  const hasNext=(idx < list.length - 1);
  const hasPrev=(idx > 0);

  return `
    <div class="sc-prog-wrap">
      <span id="scCounter" class="sc-counter">${faNum(idx+1)} از ${faNum(list.length)}</span>
      <div class="sc-scrub-box" title="برای پرش سریع به هر کلمه بکش">
        <div class="sc-track"><div id="scTrackFill" class="sc-track-fill" style="width:${pct}%"></div></div>
        <input class="sc-range" type="range" min="0" max="${list.length-1}" value="${idx}" oninput="scScrubPreview(this.value)" onchange="scJumpTo(this.value)" aria-label="موقعیت کلمه در درس">
      </div>
      ${masteryPct!==null?`<span id="scMasteryChip" class="sc-mastery-chip">تسلط: ${faNum(masteryPct)}٪</span>`:''}
    </div>
    <div class="sc-viewport">
      <div class="sc-stack">
        ${list.length - idx > 2 ? '<div class="sc-ghost2"></div>' : ''}
        ${hasNext ? '<div id="scGhost" class="sc-ghost"></div>' : ''}
        ${renderSingleFocusCard(item)}
      </div>
    </div>
    <div class="sc-nav">
      <button class="sc-nbtn" ${!hasPrev?'disabled':''} onclick="scGo(-1)">→ قبلی</button>
      <button class="sc-nbtn say" onclick="scReplayCurrent()">🔊 پخش تلفظ</button>
      <button class="sc-nbtn next-pri" onclick="scGo(1)">${hasNext?'بعدی ←':'پایان ✓'}</button>
    </div>
    <div class="sc-hint-line">👈 با یک انگشت از راست به چپ بکش برای کلمهٔ بعدی${prefs.cardAutoAudio!==false?' · تلفظ خودکار روشن است':''}</div>
  `;
}

function attachSingleCardSwipe(){
  const card=document.getElementById('scCard');
  if(!card) return;
  const ghost=document.getElementById('scGhost');
  const badge=document.getElementById('scDirBadge');
  let sx=0, sy=0, dx=0, dy=0, t0=0, active=false, locked=null; // locked: 'h' | 'v' | null

  const startDrag=(x, y, target)=>{
    if(target && target.closest('input, select, textarea, a')) return;
    sx=x; sy=y; dx=0; dy=0; t0=Date.now(); active=true; locked=null;
  };

  const moveDrag=(x, y, ev)=>{
    if(!active) return;
    dx=x-sx; dy=y-sy;
    if(!locked){
      if(Math.abs(dx)<9 && Math.abs(dy)<9) return;
      if(Math.abs(dx) > Math.abs(dy)*1.12){
        locked='h';
        card.classList.add('dragging');
      }else{
        locked='v';
        active=false;
        return;
      }
    }
    if(locked!=='h') return;
    if(ev && ev.cancelable) ev.preventDefault();

    const curIdx=getActiveDeckIdx();
    let effDx=dx;
    // Soft rubber-band resistance when swiping right at card #1
    if(dx > 0 && curIdx === 0) effDx = dx * 0.28;

    const rot=Math.max(-10, Math.min(10, effDx * 0.028));
    card.style.transform=`translate3d(${effDx}px, 0, 0) rotate(${rot}deg)`;

    const ratio=Math.min(1, Math.abs(effDx)/90);
    if(ghost && effDx < 0){
      const sc=0.955 + ratio*0.045;
      const ty=6 - ratio*6;
      ghost.style.transform=`scale(${sc}) translateY(${ty}px)`;
      ghost.style.opacity=String(0.55 + ratio*0.4);
    }
    if(badge){
      if(effDx < -18){
        const isLast=(curIdx >= scCurrentList.length - 1);
        badge.textContent=isLast?'🎉 پایان درس':'← کلمهٔ بعدی';
        badge.className='sc-dir-badge next';
        badge.style.opacity=String(Math.min(1, (Math.abs(effDx)-16)/65));
        badge.style.transform=`translateX(-50%) scale(${0.92 + ratio*0.1})`;
      }else if(effDx > 18 && curIdx > 0){
        badge.textContent='کلمهٔ قبلی →';
        badge.className='sc-dir-badge prev';
        badge.style.opacity=String(Math.min(1, (effDx-16)/65));
        badge.style.transform=`translateX(-50%) scale(${0.92 + ratio*0.1})`;
      }else{
        badge.style.opacity='0';
      }
    }
  };

  let suppressClick=false;
  card.addEventListener('click', e=>{
    if(suppressClick){ e.preventDefault(); e.stopPropagation(); suppressClick=false; }
  }, true);

  const endDrag=()=>{
    if(!active || locked!=='h'){ active=false; return; }
    active=false;
    if(Math.abs(dx)>12){ suppressClick=true; setTimeout(()=>{ suppressClick=false; }, 240); }
    card.classList.remove('dragging');
    const dt=Math.max(1, Date.now()-t0);
    const vel=Math.abs(dx)/dt; // px per ms
    const curIdx=getActiveDeckIdx();
    const goNext=(dx < -62) || (dx < -24 && vel > 0.34);
    const goPrev=((dx > 62) || (dx > 24 && vel > 0.34)) && curIdx > 0;

    if(goNext){
      card.style.transition='transform .17s cubic-bezier(.22,1,.36,1), opacity .16s ease';
      card.style.transform='translate3d(-112%, 0, 0) rotate(-7deg)';
      card.style.opacity='0';
      if(ghost){ ghost.style.transform='scale(1) translateY(0)'; ghost.style.opacity='1'; }
      setTimeout(()=>scGo(1, true), 155);
    }else if(goPrev){
      card.style.transition='transform .17s cubic-bezier(.22,1,.36,1), opacity .16s ease';
      card.style.transform='translate3d(112%, 0, 0) rotate(7deg)';
      card.style.opacity='0';
      setTimeout(()=>scGo(-1, true), 155);
    }else{
      card.style.transform='';
      if(ghost){ ghost.style.transform=''; ghost.style.opacity=''; }
      if(badge){ badge.style.opacity='0'; }
    }
  };

  // Touch events (Android / iOS)
  card.addEventListener('touchstart', e=>{
    if(e.touches.length===1) startDrag(e.touches[0].clientX, e.touches[0].clientY, e.target);
  }, {passive:true});
  card.addEventListener('touchmove', e=>{
    if(e.touches.length===1) moveDrag(e.touches[0].clientX, e.touches[0].clientY, e);
  }, {passive:false});
  card.addEventListener('touchend', endDrag, {passive:true});
  card.addEventListener('touchcancel', endDrag, {passive:true});

  // Mouse drag support (Laptop)
  card.addEventListener('mousedown', e=>{
    if(e.button!==0) return;
    startDrag(e.clientX, e.clientY, e.target);
    const onMM=ev=>moveDrag(ev.clientX, ev.clientY, ev);
    const onMU=()=>{
      window.removeEventListener('mousemove', onMM);
      window.removeEventListener('mouseup', onMU);
      endDrag();
    };
    window.addEventListener('mousemove', onMM);
    window.addEventListener('mouseup', onMU);
  });
}

// Keyboard shortcuts on desktop when viewing single cards
window.addEventListener('keydown', e=>{
  if(document.activeElement && ['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
  if(state.activeWordId) return;
  const inPackCards=(state.tab==='lessons' && state.activePack && prefs.studyLayout==='cards');
  const inVerbCards=(state.tab==='verbs' && prefs.verbLayout==='cards');
  if(!inPackCards && !inVerbCards) return;
  if(e.key==='ArrowLeft'){ e.preventDefault(); scGo(1); }
  else if(e.key==='ArrowRight'){ e.preventDefault(); scGo(-1); }
  else if(e.key===' '){ e.preventDefault(); scReplayCurrent(); }
});

function renderPackDetail(){
  document.getElementById('backBtn').classList.add('show');
  let title='', sub='';
  const items=getPackItems(state.activePack);
  const cfg=getLevelCfg();
  if(state.activePack.startsWith('L')){
    const meta=LESSON_META.find(m=>m.pk===state.activePack);
    title=`${activeLevel} · درس ${meta.num} · ${meta.title}`;
    sub=meta.sub;
  }else if(state.activePack===cfg.primaryExtra.pk){
    title=cfg.primaryExtra.detailTitle; sub=cfg.primaryExtra.detailSub;
  }else{
    const opt=cfg.optionalExtras.find(o=>o.pk===state.activePack);
    title=opt?opt.detailTitle:state.activePack;
    sub=opt?opt.detailSub:'';
  }
  document.getElementById('topTitle').textContent=title;
  document.getElementById('topSub').textContent=sub;

  const st=calcPackStats(items);
  const counts={
    all:items.length,
    noun:items.filter(x=>x.k==='noun').length,
    verb:items.filter(x=>x.k==='verb').length,
    adj:items.filter(x=>x.k==='adj').length,
    other:items.filter(x=>x.k==='other').length
  };
  let filtered=state.packFilter==='all'?items:items.filter(x=>x.k===state.packFilter);
  if(state.onlyUnmastered) filtered=filtered.filter(x=>!isMastered(x));

  const chipDef=[
    ['all',`همه (${faNum(counts.all)})`],
    ['noun',`اسم‌ها (${faNum(counts.noun)})`],
    ['verb',`فعل‌ها (${faNum(counts.verb)})`],
    ['adj',`صفت‌ها (${faNum(counts.adj)})`],
    ['other',`عبارت‌ها (${faNum(counts.other)})`]
  ].filter(c=>c[0]==='all'||counts[c[0]]>0);

  const isCards=(prefs.studyLayout!=='list');
  scContext='pack';

  if(isCards){
    let html=`<div class="sc-topstrip">
      <div class="sc-toprow">
        <div class="view-seg" role="tablist" aria-label="حالت نمایش">
          <button class="vseg-btn active" onclick="setStudyLayout('cards')">🃏 تک‌کارتی</button>
          <button class="vseg-btn" onclick="setStudyLayout('list')">📋 لیست</button>
        </div>
        <div class="sc-mini-acts">
          <button id="scAutoBtn" class="sc-pill-btn ${prefs.cardAutoAudio!==false?'on':''}" onclick="toggleCardAutoAudio()">${prefs.cardAutoAudio!==false?'🔊 خودکار':'🔇 بی‌صدا'}</button>
          <button class="sc-pill-btn ${state.quizMask?'mask-on':''}" onclick="state.quizMask=!state.quizMask;renderPackDetail()" title="مخفی‌کردن معنی کلمه و ترجمهٔ جمله">👁️</button>
          <button id="packAudioBtn" class="sc-pill-btn dl-pill" onclick="startBatchAudio('${esc(state.activePack)}')">📥 دانلود صوت درس</button>
          <button class="sc-pill-btn" onclick="startDeckReview('${esc(state.activePack)}')" title="آزمون لایتنر این درس">🎯 آزمون</button>
        </div>
      </div>
      <div class="sc-filter-row">
        ${chipDef.map(([k,lbl])=>`<button class="chip ${state.packFilter===k?'active':''}" onclick="state.packFilter='${k}';state.scDone=false;setPackIdx('${esc(state.activePack)}',0);renderPackDetail();if(prefs.cardAutoAudio!==false)scheduleCardAutoSpeak(120)">${lbl}</button>`).join('')}
        <button class="chip ${state.onlyUnmastered?'active':''}" onclick="state.onlyUnmastered=!state.onlyUnmastered;state.scDone=false;setPackIdx('${esc(state.activePack)}',0);renderPackDetail()">🎯 یادنگرفته</button>
      </div>
    </div>`;

    html += renderSingleCardStage(filtered, title, st.pct);
    document.getElementById('appView').innerHTML=html;
    attachSingleCardSwipe();
    updatePackAudioBtnLive();
    if(filtered.length && !state.scDone) prefetchNextCardsAudio(filtered, getPackIdx(state.activePack));
    return;
  }

  // Classic List Layout
  let html=`<div class="subbar">
    <div class="pack-banner">
      <div class="pb-left">
        <div id="packBannerTxt" class="pb-txt"><span>تسلط این درس: ${faNum(st.mastered)} از ${faNum(st.total)}</span><span>${faNum(st.pct)}٪</span></div>
        <div class="lbar"><div id="packBannerFill" class="lbar-fill ${st.pct===100?'done':''}" style="width:${st.pct}%"></div></div>
      </div>
      <div class="pb-btns">
        <button id="packAudioBtn" class="pb-btn sec" onclick="startBatchAudio('${esc(state.activePack)}')">📥 دانلود صوت درس</button>
        <button class="pb-btn" onclick="startDeckReview('${esc(state.activePack)}')">🃏 مرور</button>
      </div>
    </div>
    <div class="chips-row">${chipDef.map(([k,lbl])=>`<button class="chip ${state.packFilter===k?'active':''}" onclick="state.packFilter='${k}';state.limit=60;renderPackDetail()">${lbl}</button>`).join('')}</div>
    <div class="lesson-tools">
      <div class="view-seg">
        <button class="vseg-btn" onclick="setStudyLayout('cards')">🃏 تک‌کارتی</button>
        <button class="vseg-btn active" onclick="setStudyLayout('list')">📋 لیست</button>
      </div>
      <div class="tool-pills">
        <button class="quiz-pill ${state.onlyUnmastered?'unseen-on':''}" onclick="state.onlyUnmastered=!state.onlyUnmastered;renderPackDetail()">🎯 یادنگرفته</button>
        <button class="quiz-pill ${state.quizMask?'on':''}" onclick="state.quizMask=!state.quizMask;renderPackDetail()">👁️ مخفی معنی</button>
      </div>
    </div>
  </div>`;

  if(!filtered.length){
    html+=`<div class="empty-state">${state.onlyUnmastered?'🎉 آفرین! همهٔ واژگان این بخش را بلدی.':'موردی در این دسته وجود ندارد.'}</div>`;
  }else{
    html+=filtered.slice(0,state.limit).map(x=>renderWordCard(x,{quizMask:state.quizMask})).join('');
    if(filtered.length>state.limit){
      html+=`<button class="btn-more" onclick="state.limit+=60;renderPackDetail()">نمایش موارد بیشتر (${faNum(filtered.length-state.limit)} باقی‌مانده)…</button>`;
    }
  }
  document.getElementById('appView').innerHTML=html;
  updatePackAudioBtnLive();
}

// =========================================================
// VIEW 2: VERBS TAB
// =========================================================

// =========================================================
// v1.5 STRICT NOUN/VERB PREFIX SEARCH & DEDICATED WORD PAGE
// =========================================================
function normSearchStr(s){
  return normDe(s).replace(/[\u200c\u200d]/g,'').replace(/\s+/g,' ').trim();
}
function cleanHeadword(lm){
  return String(lm||'').replace(/^[\s…\.]+/,'').replace(/^\([^)]*\)\s*/,'').replace(/^sich\s+/i,'').trim();
}
function rawHeadword(lm){
  return String(lm||'').replace(/^[\(\s…\.]+/,'').trim();
}
function getCleanHw(x){
  return x._cl !== undefined ? x._cl : (x._cl = cleanHeadword(x.lm));
}
function getDeSearchMeta(x){
  if(x._de) return x._de;
  const lmR=rawHeadword(x.lm);
  const lmC=getCleanHw(x);
  const lmBase=lmC.replace(/\s*\([^)]*\)\s*$/,'').trim();
  let artL='', artN='', artLen=0;
  if(x.k==='noun' && x.a && ['der','die','das','das*'].includes(x.a)){
    const full=x.a.replace('*','')+' '+lmR;
    artL=full.toLowerCase();
    artN=normSearchStr(full);
    artLen=full.length;
  }
  const m={
    rL:lmR.toLowerCase(), rN:normSearchStr(lmR), rLen:lmR.length,
    cL:lmC.toLowerCase(), cN:normSearchStr(lmC), cLen:lmC.length,
    bL:lmBase.toLowerCase(), bN:normSearchStr(lmBase), bLen:lmBase.length,
    artL, artN, artLen,
    isLong:(x.k==='other' && lmC.split(/\s+/).length>=4)?1:0
  };
  x._de=m;
  return m;
}
function getFaSearchMeta(x){
  if(x._fa) return x._fa;
  const glosses=String(x.mn||'').split(/[؛،,;\/]+/).map(g=>g.trim()).filter(Boolean);
  const gArr=[];
  for(let i=0;i<glosses.length;i++){
    const gCore=glosses[i].replace(/\s*\([^)]*\)/g,'').trim();
    const gN=normSearchStr(gCore);
    const words=glosses[i].split(/[\s\(\)«»"ـ]+/).filter(Boolean).map(w=>normSearchStr(w));
    gArr.push({gN, len:gCore.length, words});
  }
  x._fa=gArr;
  return gArr;
}

function matchPrefixWordFast(x, qL, qN, isFa){
  if(!isFa){
    const m=getDeSearchMeta(x);
    if(m.bL===qL || m.bN===qN || m.cL===qL || m.cN===qN || m.rL===qL || m.rN===qN){
      return {rank:0, len:m.bLen, isLong:m.isLong};
    }
    if(m.rL.startsWith(qL) || m.rN.startsWith(qN)){
      return {rank:1, len:m.rLen, isLong:m.isLong};
    }
    if(m.cL.startsWith(qL) || m.cN.startsWith(qN)){
      return {rank:2, len:m.cLen, isLong:m.isLong};
    }
    if(m.artLen && (m.artL.startsWith(qL) || m.artN.startsWith(qN))){
      return {rank:3, len:m.artLen, isLong:m.isLong};
    }
    return null;
  }else{
    const gArr=getFaSearchMeta(x);
    for(let i=0;i<gArr.length;i++){
      const g=gArr[i];
      if(g.gN===qN) return {rank:0, len:g.len, isLong:0};
      if(g.gN.startsWith(qN)) return {rank:i===0?1:2, len:g.len, isLong:0};
    }
    for(let i=0;i<gArr.length;i++){
      const g=gArr[i];
      for(let j=0;j<g.words.length;j++){
        if(g.words[j].startsWith(qN)) return {rank:3, len:g.len, isLong:0};
      }
    }
    return null;
  }
}

function sortPrefixMatches(items, rawQ, alreadySorted=false){
  const q=String(rawQ||'').trim();
  if(!q){
    if(alreadySorted) return items;
    return items.slice().sort((a,b)=>cmpDe(getCleanHw(a), getCleanHw(b)));
  }
  const qL=q.toLowerCase();
  const qN=normSearchStr(q);
  const isFa=!/[A-Za-zÄÖÜäöüß]/.test(q) && /[\u0600-\u06FF]/.test(q);
  const scored=[];
  for(let i=0;i<items.length;i++){
    const x=items[i];
    const m=matchPrefixWordFast(x, qL, qN, isFa);
    if(m) scored.push({x, rank:m.rank, isLong:m.isLong, len:m.len});
  }
  scored.sort((a,b)=>{
    if(a.rank!==b.rank) return a.rank-b.rank;
    if(a.isLong!==b.isLong) return a.isLong-b.isLong;
    if(a.len!==b.len) return a.len-b.len;
    const cmp=cmpDe(getCleanHw(a.x), getCleanHw(b.x));
    if(cmp!==0) return cmp;
    return (LEVEL_RANK[a.x._lvl||'A1']??0)-(LEVEL_RANK[b.x._lvl||'A1']??0);
  });
  return scored.map(s=>s.x);
}

// Compute exact display highlight length for umlaut-normalized German prefixes (e.g. "ueb" -> "Üb")
function highlightDePrefix(text, rawQ){
  const q=String(rawQ||'').trim();
  if(!q || (!/[A-Za-zÄÖÜäöüß]/.test(q) && /[\u0600-\u06FF]/.test(q))) return esc(text);
  const qL=q.toLowerCase(), qN=normSearchStr(q);
  const candidates=[0];
  const mEllip=text.match(/^[\s…\.]+/);
  if(mEllip) candidates.push(mEllip[0].length);
  const mParen=text.match(/^\([^)]*\)\s*/);
  if(mParen) candidates.push(mParen[0].length);
  const mSich=text.match(/^(?:\([^)]*\)\s*)?sich\s+/i);
  if(mSich) candidates.push(mSich[0].length);
  const mLead=text.match(/^[\(\s…\.]+/);
  if(mLead && !candidates.includes(mLead[0].length)) candidates.push(mLead[0].length);

  for(const start of candidates){
    const sub=text.slice(start);
    if(sub.toLowerCase().startsWith(qL)){
      return esc(text.slice(0,start))+'<mark class="sug-hl">'+esc(sub.slice(0,qL.length))+'</mark>'+esc(sub.slice(qL.length));
    }
    if(normSearchStr(sub).startsWith(qN)){
      let cut=0;
      for(let i=1;i<=sub.length;i++){
        if(normSearchStr(sub.slice(0,i)).length>=qN.length){ cut=i; break; }
      }
      if(cut>0){
        return esc(text.slice(0,start))+'<mark class="sug-hl">'+esc(sub.slice(0,cut))+'</mark>'+esc(sub.slice(cut));
      }
    }
  }
  return esc(text);
}

function renderCompactSuggestionRow(x, q, showLevel=false){
  let badge='';
  if(x.k==='verb'){
    badge='<span class="sug-badge b-verb">⚡</span>';
  }else if(x.k==='noun'){
    if(x.a==='der') badge='<span class="sug-badge b-der">der</span>';
    else if(x.a==='die') badge='<span class="sug-badge b-die">die</span>';
    else if(x.a==='das'||x.a==='das*') badge='<span class="sug-badge b-das">das</span>';
    else if(x.a==='pl') badge='<span class="sug-badge b-pl">pl</span>';
    else if(x.a && x.a.includes('/')) badge=`<span class="sug-badge b-oth">${esc(x.a)}</span>`;
  }else if(x.k==='adj'){
    badge='<span class="sug-badge b-adj">صفت</span>';
  }else{
    const shortPos=(x.pos && x.pos.includes('قید'))?'قید':((x.pos && x.pos.includes('عدد'))?'عدد':'عبارت');
    badge=`<span class="sug-badge b-oth">${shortPos}</span>`;
  }
  const mnShort=state.quizMask?'•••':escBidi(String(x.mn||'').split(/[؛،]/)[0].trim());
  const lvl=ID_INDEX.get(x.id)?.lvl||activeLevel;
  const lvlHtml=showLevel?`<span class="lvl-badge lb-${lvl}">${lvl}</span>`:'';
  return `<button class="sug-item" onclick="openWordPage('${esc(x.id)}')">
    <span class="sug-de-grp">${badge}<span class="sug-lm">${highlightDePrefix(x.lm, q)}</span></span>
    <span class="sug-right"><span class="sug-mn">${mnShort}</span>${lvlHtml}<span class="sug-arr">‹</span></span>
  </button>`;
}

function getPackLabelFa(pk, ls, lvl=activeLevel){
  const cfg=getLevelCfg(lvl);
  if(pk && pk.startsWith('L')) return `درس ${faNum(ls)}`;
  if(pk===cfg.primaryExtra.pk) return cfg.primaryExtra.tagLabel;
  const opt=cfg.optionalExtras.find(o=>o.pk===pk);
  if(opt) return opt.tagLabel;
  return `آلمانی ${lvl}`;
}

function openWordPage(id, fromPop=false){
  const found=ID_INDEX.get(id);
  const item=found?found.item:DATA.find(d=>d.id===id);
  if(!item) return;
  stopAudio();
  state.activeWordId=id;
  state.wordReturnTab=state.tab;
  if(!fromPop){ try{ history.pushState({wid:id, tab:state.tab}, '', '#w-'+id); }catch(e){} }
  window.scrollTo({top:0, behavior:'instant'});
  renderApp();
  if(prefs.cardAutoAudio!==false){
    setTimeout(()=>{
      if(state.activeWordId===id){
        const btn=document.getElementById('scLemmaBtn');
        speakDe(item.lm, btn||null);
      }
    }, 120);
  }
}

function openPackFromWord(pk, id, targetLvl=activeLevel){
  stopAudio();
  state.activeWordId=null;
  const switched=(targetLvl && LEVEL_ORDER.includes(targetLvl) && targetLvl!==activeLevel);
  if(switched){
    savePrefs();
    loadLevelContext(targetLvl);
    setTheme(prefs.theme);
    sanitizeB2State();
    syncB2Buttons();
  }
  const cfg=getLevelCfg();
  if(cfg.optionalExtras.some(o=>o.pk===pk) && !prefs.includeExtra){
    prefs.includeExtra=true;
    savePrefs();
  }
  const items=getPackItems(pk);
  const idx=items.findIndex(d=>d.id===id);
  if(idx>=0){
    prefs.packIdx[pk]=idx;
    savePrefs();
  }
  updateDueBadge();
  renderLevelBar();
  openPack(pk);
  if(switched){
    const found=ID_INDEX.get(id);
    showToast(`${activeLevel} · ${getPackLabelFa(pk, found?.item?.ls, activeLevel)}`, `🎯 انتقال به ${activeLevel}`, 't-human', 1700);
  }
}

function renderWordPage(){
  const found=ID_INDEX.get(state.activeWordId);
  const x=found?found.item:DATA.find(d=>d.id===state.activeWordId);
  const lvl=found?found.lvl:activeLevel;
  if(!x){ state.activeWordId=null; renderApp(); return; }
  scContext='word';
  document.getElementById('backBtn').classList.add('show');
  const artPrefix=(x.k==='noun' && x.a && ['der','die','das','das*'].includes(x.a))?(x.a.replace('*','')+' '):'';
  document.getElementById('topTitle').textContent=artPrefix+x.lm;
  const kindLbl=x.pos||(x.k==='verb'?'فعل':(x.k==='adj'?'صفت':(x.k==='noun'?'اسم':'عبارت')));
  const pkLbl=getPackLabelFa(x.pk, x.ls, lvl);
  document.getElementById('topSub').textContent=`${kindLbl} · سطح ${lvl} · ${pkLbl}`;

  const backLbl=(state.wordReturnTab==='verbs')?'→ بازگشت به افعال':'→ بازگشت به جست‌وجو';
  const view=document.getElementById('appView');
  view.innerHTML=`
    <div class="wd-topstrip">
      <button class="sc-pill-btn ${state.quizMask?'mask-on':''}" onclick="state.quizMask=!state.quizMask;renderWordPage()">👁️ ${state.quizMask?'نمایش معنی‌ها':'مخفی معنی و جمله'}</button>
      <button class="sc-pill-btn" onclick="openPackFromWord('${esc(x.pk)}','${esc(x.id)}','${lvl}')">📖 رفتن به ${lvl} · ${pkLbl}</button>
    </div>
    ${renderSingleFocusCard(x, {openConj: x.k==='verb', showPackTag: true, showLevelBadge: true, itemLevel: lvl})}
    <div class="wd-dock">
      <button class="sc-nbtn say" data-say="${esc(x.lm)}" onclick="speakDe(this.dataset.say,this)">🔊 تلفظ دوباره</button>
      <button class="sc-nbtn" onclick="goBack()">${backLbl}</button>
    </div>
  `;
}

function onSearchKeydown(e, source){
  if(e.key==='Escape'){
    if(source==='search') onSearchInput('');
    else onVerbInput('');
  }else if(e.key==='Enter'){
    const first=document.querySelector(source==='search'?'#searchListBox .sug-item':'#verbSuggestBox .sug-item');
    if(first){ e.preventDefault(); first.click(); }
  }
}

function getCachedVerbs(){
  const ck=`${activeLevel}|${prefs.includeExtra?1:0}`;
  if(VERBS_CACHE[ck]) return VERBS_CACHE[ck];
  const res=getScopedUnique().filter(x=>x.k==='verb').sort((a,b)=>cmpDe(getCleanHw(a), getCleanHw(b)));
  VERBS_CACHE[ck]=res;
  return res;
}

function renderVerbsTab(){
  document.getElementById('backBtn').classList.remove('show');
  sanitizeB2State();
  const allV=getCachedVerbs();
  document.getElementById('topTitle').textContent=`⚡ مرکز افعال ${activeLevel} (${faNum(allV.length)} فعل)`;
  document.getElementById('topSub').textContent=prefs.showB2Grammar?'جست‌وجو + فیلترهای B2، صرف ۵زمانه، امری، التزامی و مجهول':'جست‌وجو از ابتدای فعل + صرف ۶شخصی ۳زمانه';

  const baseFiltered=(state.verbFilter==='all')?allV:allV.filter(x=>{
    const f=state.verbFilter;
    if(f==='b2_noge') return !!x.vnoge;
    if(f==='b2_passiv') return x.vptp==='yes';
    if(f==='b2_nopassiv') return x.vptp==='no';
    if(f==='b2_zu') return !!x.vzu;
    return (x.vtg||[]).includes(f);
  });
  const q=state.verbQuery.trim();
  const filtered=sortPrefixMatches(baseFiltered, q, true);

  const hasModal=allV.some(x=>(x.vtg||[]).includes('وجهی'));
  const hasFvg=allV.some(x=>(x.vtg||[]).includes('اسم-فعل (FVG)'));
  const vChips=[
    ['all','همه',false],
    ['قوی/بی‌قاعده','قوی / بی‌قاعده',false],
    ['جداشدنی','جداشدنی',false],
    ['بازتابی','بازتابی',false],
    ...(hasModal?[['وجهی','وجهی',false]]:[]),
    ...(hasFvg?[['اسم-فعل (FVG)','🔗 اسم-فعل (FVG)',false]]:[]),
    ['باقاعده','باقاعده',false]
  ];
  if(prefs.showB2Grammar){
    vChips.push(
      ['b2_noge','🔹 بدون <bdi dir="ltr">ge-</bdi> (جدانشدنی)',true],
      ['b2_passiv','✓ مجهول‌پذیر',true],
      ['b2_nopassiv','✕ بدون مجهول',true],
      ['b2_zu','📌 ساختار zu',true]
    );
  }

  const isCards=(prefs.verbLayout==='cards');
  const view=document.getElementById('appView');

  if(isCards){
    scContext='verbs';
    if(!document.getElementById('verbCardsShell')){
      view.innerHTML=`<div id="verbCardsShell">
        <div class="sc-topstrip">
          <div class="sc-toprow">
            <div class="view-seg">
              <button class="vseg-btn active" onclick="setVerbLayout('cards')">🃏 تک‌کارتی</button>
              <button class="vseg-btn" onclick="setVerbLayout('list')">📋 لیست</button>
            </div>
            <div class="sc-mini-acts">
              <button id="scAutoBtn" class="sc-pill-btn ${prefs.cardAutoAudio!==false?'on':''}" onclick="toggleCardAutoAudio()">${prefs.cardAutoAudio!==false?'🔊 خودکار':'🔇 بی‌صدا'}</button>
              <button id="vcMaskBtn" class="sc-pill-btn ${state.quizMask?'mask-on':''}" onclick="state.quizMask=!state.quizMask;renderVerbsTab()" title="مخفی‌کردن معنی کلمه و ترجمهٔ جمله">👁️</button>
              <button class="sc-pill-btn dl-pill" onclick="startBatchAudio('verbs')">📥 دانلود صوت افعال</button>
              <button class="sc-pill-btn" onclick="startDeckReview('verbs')">🎯 آزمون</button>
            </div>
          </div>
          <div class="sc-vsearch">
            <span class="search-ico">⚡</span>
            <input id="verbSearchIn" class="search-in" value="${esc(state.verbQuery)}" placeholder="تایپ نام فعل (از ابتدای کلمه)…" autocomplete="off" oninput="onVerbInput(this.value)" onkeydown="onSearchKeydown(event,'verbs')">
            <button id="verbClrBtn" class="search-clr ${state.verbQuery?'show':''}" onclick="onVerbInput('')">✕</button>
          </div>
          <div id="verbSuggestBox"></div>
          <div id="verbChipsRow" class="sc-filter-row"></div>
        </div>
        <div id="verbCardsStage"></div>
      </div>`;
    }
    const autoBtn=document.getElementById('scAutoBtn');
    if(autoBtn){ autoBtn.classList.toggle('on', prefs.cardAutoAudio!==false); autoBtn.textContent=prefs.cardAutoAudio!==false?'🔊 خودکار':'🔇 بی‌صدا'; }
    const mBtn=document.getElementById('vcMaskBtn');
    if(mBtn) mBtn.classList.toggle('mask-on', state.quizMask);
    document.getElementById('verbClrBtn').classList.toggle('show', !!state.verbQuery);
    document.getElementById('verbChipsRow').innerHTML=vChips.map(([k,lbl,isB2])=>
      `<button class="chip ${isB2?'b2-chip':''} ${state.verbFilter===k?'active':''}" onclick="state.verbFilter='${k}';state.verbIdx=0;state.scDone=false;renderVerbsTab();if(prefs.cardAutoAudio!==false)scheduleCardAutoSpeak(120)">${lbl}</button>`
    ).join('');

    const sugBox=document.getElementById('verbSuggestBox');
    if(q){
      if(filtered.length){
        const showSug=filtered.slice(0, 10);
        sugBox.innerHTML=`<div class="sug-box inline-dd">${showSug.map(x=>renderCompactSuggestionRow(x, q)).join('')}</div>`;
      }else{
        sugBox.innerHTML=`<div class="sug-box inline-dd"><div style="padding:10px;text-align:center;font-size:.76rem;color:var(--muted)">فعلی با این شروع پیدا نشد.</div></div>`;
      }
    }else{
      sugBox.innerHTML='';
    }

    document.getElementById('verbCardsStage').innerHTML=renderSingleCardStage(filtered, 'فعل‌های آلمانی', null);
    attachSingleCardSwipe();
    if(filtered.length && !state.scDone) prefetchNextCardsAudio(filtered, state.verbIdx);
    return;
  }

  if(!document.getElementById('verbListShell')){
    view.innerHTML=`<div id="verbListShell">
      <div class="subbar">
        <div class="search-wrap" style="margin-bottom:6px">
          <span class="search-ico">⚡</span>
          <input id="verbSearchIn" class="search-in" value="${esc(state.verbQuery)}" placeholder="تایپ نام فعل آلمانی یا فارسی (از ابتدای کلمه)…" autocomplete="off" oninput="onVerbInput(this.value)" onkeydown="onSearchKeydown(event,'verbs')">
          <button id="verbClrBtn" class="search-clr ${state.verbQuery?'show':''}" onclick="onVerbInput('')">✕</button>
        </div>
        <div id="verbSuggestBox"></div>
        <div id="verbChipsRow" class="chips-row" style="margin-top:6px"></div>
        <div class="lesson-tools">
          <div class="view-seg">
            <button class="vseg-btn" onclick="setVerbLayout('cards')">🃏 تک‌کارتی</button>
            <button class="vseg-btn active" onclick="setVerbLayout('list')">📋 لیست</button>
          </div>
          <div class="tool-pills">
            <span id="verbCntLbl" class="count-lbl" style="align-self:center;margin-left:4px"></span>
            <button class="quiz-pill dl-pill" onclick="startBatchAudio('verbs')">📥 دانلود صوت افعال</button>
            <button id="verbQuizBtn" class="quiz-pill ${state.quizMask?'on':''}" onclick="state.quizMask=!state.quizMask;renderVerbsTab()">👁️ مخفی معنی</button>
          </div>
        </div>
      </div>
      <div id="verbListBox"></div>
    </div>`;
  }
  document.getElementById('verbChipsRow').innerHTML=vChips.map(([k,lbl,isB2])=>
    `<button class="chip ${isB2?'b2-chip':''} ${state.verbFilter===k?'active':''}" onclick="state.verbFilter='${k}';state.limit=45;renderVerbsTab()">${lbl}</button>`
  ).join('');
  document.getElementById('verbQuizBtn').classList.toggle('on', state.quizMask);
  document.getElementById('verbClrBtn').classList.toggle('show', !!state.verbQuery);
  document.getElementById('verbCntLbl').textContent=`${faNum(filtered.length)} فعل`;

  const sugBox=document.getElementById('verbSuggestBox');
  const listBox=document.getElementById('verbListBox');

  if(q){
    if(!filtered.length){
      sugBox.innerHTML='';
      listBox.innerHTML=`<div class="empty-state">فعلی که با «${esc(q)}» شروع شود پیدا نشد.</div>`;
    }else{
      const shown=filtered.slice(0, state.limit);
      sugBox.innerHTML='';
      listBox.innerHTML=`<div class="sug-head"><span>نزدیک‌ترین فعل‌ها (${faNum(filtered.length)} مورد)</span><span>لمس = صفحهٔ فعل</span></div>
        <div class="sug-box">${shown.map(x=>renderCompactSuggestionRow(x, q)).join('')}
        ${filtered.length>state.limit?`<button class="sug-more-btn" onclick="state.limit+=40;renderVerbsTab()">نمایش فعل‌های بیشتر (${faNum(filtered.length-state.limit)} باقی‌مانده)…</button>`:''}
        </div>`;
    }
    return;
  }

  sugBox.innerHTML='';
  let listHtml='';
  if(!filtered.length){
    listHtml=`<div class="empty-state">فعلی با این فیلتر پیدا نشد.</div>`;
  }else{
    listHtml=filtered.slice(0,state.limit).map(x=>renderWordCard(x,{quizMask:state.quizMask})).join('');
    if(filtered.length>state.limit){
      listHtml+=`<button class="btn-more" onclick="state.limit+=50;renderVerbsTab()">نمایش فعل‌های بیشتر (${faNum(filtered.length-state.limit)} باقی‌مانده)…</button>`;
    }
  }
  listBox.innerHTML=listHtml;
}

let _verbDeb=null;
function onVerbInput(val){
  state.verbQuery=val; state.limit=45; state.verbIdx=0; state.scDone=false;
  const inp=document.getElementById('verbSearchIn'); if(inp && inp.value!==val) inp.value=val;
  clearTimeout(_verbDeb);
  if(!val){ renderVerbsTab(); return; }
  _verbDeb=setTimeout(renderVerbsTab, 75);
}

// =========================================================
// VIEW 3: REVIEW DASHBOARD & INTERACTIVE LEITNER FLASHCARDS
// =========================================================
function isCleanPrepCaseItem(x){
  if(x.k!=='other' || !['akk','dat','wechsel','gen'].includes(x.gt)) return false;
  const lm=String(x.lm||'');
  if(/\b(dem|der|die|das|Urlaub|Spanien|Straße)\b/.test(lm)) return false;
  if(/^(am|im)\b/.test(lm)) return false;
  if(lm.includes('(+')) return false;
  return true;
}

function getDeckCandidates(deck, mode){
  let pool=[];
  if(deck==='smart' || deck==='due'){
    pool=getScopedUnique();
  }else if(deck==='verbs'){
    pool=getScopedUnique().filter(x=>x.k==='verb');
  }else if(deck==='b2_ndekl'){
    pool=getScopedUnique().filter(x=>x.k==='noun' && !!x.nd);
  }else if(deck==='b2_preps'){
    pool=getScopedUnique().filter(x=>x.k==='other' && !!x.gt);
  }else{
    pool=getPackItems(deck);
  }
  if(mode==='article'){
    pool=pool.filter(x=>x.k==='noun' && (x.a==='der'||x.a==='die'||x.a==='das'));
  }else if(mode==='prep_case'){
    pool=pool.filter(isCleanPrepCaseItem);
  }else if(mode==='verb_b2'){
    pool=pool.filter(x=>x.k==='verb' && (x.vimp || x.vk2));
  }
  const now=Date.now();
  const due=[], unseen=[], later=[];
  for(const x of pool){
    const p=getEntry(x);
    if(!p) unseen.push(x);
    else if(p.box<5 && (p.next||0)<=now) due.push(x);
    else later.push(x);
  }
  const shuf=arr=>{
    const a=arr.slice();
    for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  };
  if(deck==='due') return shuf(due);
  due.sort((a,b)=>((getEntry(a)?.box||0)-(getEntry(b)?.box||0)));
  if(mode==='verb_b2'){
    // Prioritize strong/irregular/modal/synthetic-K2 verbs ahead of simple regular verbs
    const isCore=x=>((x.vtg||[]).includes('قوی/بی‌قاعده') || (x.vtg||[]).includes('وجهی') || (x.vk2 && !x.vk2.startsWith('würde ')));
    const uHi=shuf(unseen.filter(isCore)), uLo=shuf(unseen.filter(x=>!isCore(x)));
    return [...due, ...uHi, ...uLo, ...shuf(later)];
  }
  return [...due, ...shuf(unseen), ...shuf(later)];
}

function getDeckTitle(deck){
  const cfg=getLevelCfg();
  if(deck==='smart') return `مرور هوشمند ${activeLevel} (سررسید + جدید)`;
  if(deck==='due') return `فقط سررسیدهای امروز (${activeLevel})`;
  if(deck==='verbs') return `فعل‌های آلمانی ${activeLevel}`;
  if(deck==='b2_ndekl') return 'اسم‌های ضعیف (n-Dekl.) و صرف صفتی';
  if(deck==='b2_preps') return 'حروف اضافه و ربط‌دهنده‌ها';
  if(deck===cfg.primaryExtra.pk) return cfg.primaryExtra.batchTitle;
  const opt=cfg.optionalExtras.find(o=>o.pk===deck);
  if(opt) return opt.batchTitle;
  const m=LESSON_META.find(l=>l.pk===deck);
  return m?`درس ${m.num} · ${m.title}`:deck;
}

function selectRevMode(mode){
  state.revMode=mode;
  if(mode==='prep_case'){
    if(getDeckCandidates(state.revDeck, 'prep_case').length<3) state.revDeck='smart';
  }else if(mode==='verb_b2'){
    if(getDeckCandidates(state.revDeck, 'verb_b2').length<1) state.revDeck='verbs';
  }
  renderReviewDashboard();
}

function startFlashcardSession(){
  const cand=getDeckCandidates(state.revDeck, state.revMode);
  if(!cand.length){
    showToast('کارتی برای این فیلتر پیدا نشد', 'ℹ️ مرور', 't-load');
    return;
  }
  const size=state.revSize===0?cand.length:Math.min(state.revSize, cand.length);
  state.session={
    queue:cand.slice(0, size),
    idx:0,
    totalInit:size,
    flipped:false,
    artPicked:null,
    prepPicked:null,
    rightCnt:0,
    againCnt:0,
    done:false,
    mode:state.revMode,
    deckTitle:getDeckTitle(state.revDeck)
  };
  renderReviewTab();
  autoSpeakFlashcardFront();
}

function autoSpeakFlashcardFront(){
  const s=state.session;
  if(!s || s.done || !prefs.fcAutoAudio) return;
  const cur=s.queue[s.idx];
  if(!cur) return;
  if(s.mode==='standard' || s.mode==='verb_b2' || s.mode==='prep_case'){
    setTimeout(()=>speakDe(cur.lm, null), 160);
  }
}

function flipFlashcard(){
  const s=state.session;
  if(!s || s.done || s.mode==='article' || s.mode==='prep_case' || s.flipped) return;
  s.flipped=true;
  renderActiveSession();
  const cur=s.queue[s.idx];
  if(cur && prefs.fcAutoAudio && s.mode==='reverse'){
    const say=cur.k==='noun' && (cur.a==='der'||cur.a==='die'||cur.a==='das')?`${cur.a} ${cur.lm}`:cur.lm;
    setTimeout(()=>speakDe(say, null), 140);
  }
}

function rateFlashcard(grade){
  const s=state.session;
  if(!s || s.done) return;
  const cur=s.queue[s.idx];
  if(!cur) return;
  updateItemProgress(cur, grade);
  if(grade==='again'){
    s.againCnt++;
    const insertAt=Math.min(s.queue.length, s.idx+4);
    s.queue.splice(insertAt, 0, cur);
  }else{
    s.rightCnt++;
  }
  s.idx++;
  s.flipped=false;
  s.artPicked=null;
  s.prepPicked=null;
  if(s.idx>=s.queue.length){
    s.done=true;
    renderActiveSession();
  }else{
    renderActiveSession();
    autoSpeakFlashcardFront();
  }
}

function pickArticleChoice(choice){
  const s=state.session;
  if(!s || s.done || s.artPicked) return;
  const cur=s.queue[s.idx];
  if(!cur) return;
  s.artPicked=choice;
  const ok=(choice===cur.a);
  updateItemProgress(cur, ok?'good':'again');
  if(ok) s.rightCnt++;
  else{
    s.againCnt++;
    const insertAt=Math.min(s.queue.length, s.idx+4);
    s.queue.splice(insertAt, 0, cur);
  }
  renderActiveSession();
  if(prefs.fcAutoAudio){
    setTimeout(()=>speakDe(`${cur.a} ${cur.lm}`, null), 120);
  }
}

function pickPrepChoice(choice){
  const s=state.session;
  if(!s || s.done || s.prepPicked) return;
  const cur=s.queue[s.idx];
  if(!cur) return;
  s.prepPicked=choice;
  const ok=(choice===cur.gt);
  updateItemProgress(cur, ok?'good':'again');
  if(ok) s.rightCnt++;
  else{
    s.againCnt++;
    const insertAt=Math.min(s.queue.length, s.idx+4);
    s.queue.splice(insertAt, 0, cur);
  }
  renderActiveSession();
  if(prefs.fcAutoAudio && cur.ex){
    setTimeout(()=>speakDe(cur.ex, null), 160);
  }
}

function nextArticleCard(){
  const s=state.session;
  if(!s) return;
  s.idx++;
  s.artPicked=null;
  s.prepPicked=null;
  s.flipped=false;
  if(s.idx>=s.queue.length) s.done=true;
  renderActiveSession();
  if(!s.done) autoSpeakFlashcardFront();
}

function renderReviewDashboard(){
  document.getElementById('backBtn').classList.remove('show');
  sanitizeB2State();
  document.getElementById('topTitle').textContent='🃏 مرور هوشمند و لایتنر';
  document.getElementById('topSub').textContent=prefs.showB2Grammar?'فلش‌کارت + آرتیکل + تمرین حروف اضافه و امری/التزامی B2':'فلش‌کارت لمسی + تمرین آرتیکل der/die/das';

  const scoped=getScopedUnique();
  const boxes={1:0, 2:0, 3:0, 4:0, 5:0};
  const now=Date.now();
  let dueCnt=0;
  for(const x of scoped){
    const p=getEntry(x);
    if(p && p.box>=1){
      const b=Math.min(5, Math.max(1, p.box));
      boxes[b]++;
      if(b<5 && (p.next||0)<=now) dueCnt++;
    }
  }
  const candCount=getDeckCandidates(state.revDeck, state.revMode).length;
  const startCount=state.revSize===0?candCount:Math.min(state.revSize, candCount);

  const cfg=getLevelCfg();
  const deckOptions=[
    ['smart', `🎯 مرور هوشمند ${activeLevel} (${faNum(dueCnt)} سررسید + واژگان جدید)`],
    ['due', `⏰ فقط سررسیدشده‌های امروز (${faNum(dueCnt)})`],
    ...LESSON_META.map(l=>[l.pk, `📖 درس ${l.num}: ${l.title}`]),
    [cfg.primaryExtra.pk, cfg.primaryExtra.deckLabel],
    ['verbs', '⚡ فقط فعل‌ها و صرف ۶شخصی']
  ];
  if(prefs.showB2Grammar){
    deckOptions.push(
      ['b2_ndekl', '⚠️ اسم‌های ضعیف (n-Dekl.) و صرف صفتی'],
      ['b2_preps', '📘 حروف اضافه و ربط‌دهنده‌ها']
    );
  }
  if(prefs.includeExtra){
    cfg.optionalExtras.forEach(opt=>deckOptions.push([opt.pk, opt.deckLabel]));
  }

  const b2ModesHtml=prefs.showB2Grammar?`
      <div class="b2-mode-wrap">
        <div class="b2-mode-lbl">🎓 تمرین‌های ویژهٔ استاندارد B2</div>
        <div class="b2-mode-grid">
          <button class="mode-btn ${state.revMode==='prep_case'?'active':''}" onclick="selectRevMode('prep_case')">
            <span class="mi">📘</span><b>حالت حروف اضافه</b><small>مفعولی · باواسطه · دووجهی · ملکی</small>
          </button>
          <button class="mode-btn ${state.revMode==='verb_b2'?'active':''}" onclick="selectRevMode('verb_b2')">
            <span class="mi">⚡</span><b>امری و التزامی افعال</b><small>Imp. · Konj. II · Passiv</small>
          </button>
        </div>
      </div>`:`<button class="b2-hint-strip" onclick="toggleB2Mode()">🎓 روشن کردن دکمهٔ B2 ← فعال‌سازی تمرین حروف اضافه و امری/التزامی افعال</button>`;

  document.getElementById('appView').innerHTML=`
    <section class="rev-card">
      <div class="rev-head">
        <h3>📦 وضعیت جعبه‌های لایتنر</h3>
        <span class="streak-badge">🔥 ${faNum(getDisplayStreak())} روز · امروز ${faNum(getTodayCount())}</span>
      </div>
      <div class="leitner-grid">
        <div class="lbox b1"><b>${faNum(boxes[1])}</b><span>جعبه ۱<br>امروز</span></div>
        <div class="lbox b2"><b>${faNum(boxes[2])}</b><span>جعبه ۲<br>۳ روز</span></div>
        <div class="lbox b3"><b>${faNum(boxes[3])}</b><span>جعبه ۳<br>۷ روز</span></div>
        <div class="lbox b4"><b>${faNum(boxes[4])}</b><span>جعبه ۴<br>۱۴ روز</span></div>
        <div class="lbox b5"><b>${faNum(boxes[5])}</b><span>تسلط<br>کامل</span></div>
      </div>
    </section>

    <section class="rev-card">
      <div class="rev-head"><h3>🎮 تنظیم جلسهٔ مرور</h3></div>
      <div class="mode-grid">
        <button class="mode-btn ${state.revMode==='standard'?'active':''}" onclick="selectRevMode('standard')">
          <span class="mi">🃏</span><b>آلمانی ← فارسی</b><small>فلش‌کارت استاندارد</small>
        </button>
        <button class="mode-btn ${state.revMode==='article'?'active':''}" onclick="selectRevMode('article')">
          <span class="mi">🎨</span><b>تمرین آرتیکل</b><small>der · die · das</small>
        </button>
        <button class="mode-btn ${state.revMode==='reverse'?'active':''}" onclick="selectRevMode('reverse')">
          <span class="mi">🔄</span><b>فارسی ← آلمانی</b><small>یادآوری فعال</small>
        </button>
      </div>
      ${b2ModesHtml}

      <div style="margin-top:12px;font-size:.77rem;font-weight:800;color:var(--ink2)">محدودهٔ مرور:</div>
      <select class="deck-select" onchange="state.revDeck=this.value;renderReviewDashboard()">
        ${deckOptions.map(([v,lbl])=>`<option value="${v}" ${state.revDeck===v?'selected':''}>${lbl}</option>`).join('')}
      </select>

      <div style="margin-top:11px;font-size:.77rem;font-weight:800;color:var(--ink2)">تعداد کارت در این جلسه:</div>
      <div class="size-row">
        ${[10,20,30,0].map(sz=>`<button class="size-btn ${state.revSize===sz?'active':''}" onclick="state.revSize=${sz};renderReviewDashboard()">${sz===0?'همه':faNum(sz)+' کارت'}</button>`).join('')}
      </div>

      <div class="rev-opt-row">
        <span>🔊 پخش خودکار صدای انسانی روی کارت</span>
        <label class="switch"><input type="checkbox" ${prefs.fcAutoAudio?'checked':''} onchange="prefs.fcAutoAudio=this.checked;savePrefs()"><span class="slider"></span></label>
      </div>
      ${state.revMode==='standard'?`<div class="rev-opt-row" style="margin-top:8px;padding-top:8px">
        <span>🙈 مخفی‌کردن آرتیکل اسم روی روی کارت</span>
        <label class="switch"><input type="checkbox" ${prefs.fcHideArticle?'checked':''} onchange="prefs.fcHideArticle=this.checked;savePrefs()"><span class="slider"></span></label>
      </div>`:''}

      <button class="start-btn" ${startCount===0?'disabled':''} onclick="startFlashcardSession()">
        ${startCount>0?`شروع مرور (${faNum(startCount)} کارت) ←`:'کارتی در این محدوده نیست'}
      </button>
    </section>
  `;
}

function renderActiveSession(){
  const s=state.session;
  document.getElementById('backBtn').classList.add('show');
  document.getElementById('topTitle').textContent=s.deckTitle;
  const subMap={
    article:'تمرین آرتیکل اسم‌ها (der / die / das)',
    reverse:'یادآوری فعال (فارسی ← آلمانی)',
    prep_case:'تمرین حالت حروف اضافه (مفعولی / باواسطه / دووجهی / ملکی)',
    verb_b2:'تمرین امری (Imp.) و التزامی دوم (Konj. II) افعال',
    standard:'فلش‌کارت لایتنر (آلمانی ← فارسی)'
  };
  document.getElementById('topSub').textContent=subMap[s.mode]||subMap.standard;

  if(s.done){
    const totalAns=s.rightCnt+s.againCnt;
    const acc=totalAns?Math.round((s.rightCnt/totalAns)*100):100;
    document.getElementById('appView').innerHTML=`
      <div class="done-box">
        <div class="done-ico">🎉</div>
        <h3 style="margin:0;font-size:1.15rem;font-weight:800">جلسهٔ مرور با موفقیت تمام شد!</h3>
        <p style="margin:6px 0 0;font-size:.82rem;color:var(--muted)">نتایج در جعبه‌های لایتنر و پیشرفت درس‌ها ثبت شد.</p>
        <div class="done-stats">
          <div class="dstat"><b>${faNum(s.rightCnt)}</b><span>پاسخ درست</span></div>
          <div class="dstat"><b>${faNum(acc)}٪</b><span>دقت جلسه</span></div>
          <div class="dstat"><b>🔥 ${faNum(getDisplayStreak())}</b><span>روز پیوسته</span></div>
        </div>
        <button class="start-btn" onclick="startFlashcardSession()">شروع دور بعدی مرور 🃏</button>
        <button class="btn-more" style="margin-top:9px" onclick="state.session=null;renderReviewTab()">بازگشت به داشبورد مرور</button>
      </div>
    `;
    return;
  }

  const cur=s.queue[s.idx];
  const pct=Math.round((s.idx/s.queue.length)*100);
  const p=getEntry(cur);
  const boxLbl=p?`جعبه ${faNum(p.box)}`:'واژهٔ جدید';
  const packBadge=`${activeLevel} · ${getPackLabelFa(cur.pk, cur.ls)}`;

  const nextBox=Math.min(5, Math.max(2, (p?.box||0)+1));
  const nextDays=BOX_DAYS[nextBox]||7;

  let cardInner='';
  let dockHtml='';

  if(s.mode==='article'){
    const picked=s.artPicked;
    const ok=picked && picked===cur.a;
    cardInner=`
      <div class="fc-meta-row">
        <span class="fc-badge">${packBadge} · اسم</span>
        <span class="fc-box-tag">${boxLbl}</span>
      </div>
      <div class="fc-front" style="cursor:default">
        <div class="fc-de-big">
          ${picked?renderArticlePill(cur.a):'<span class="art-pill" style="background:var(--surface3);color:var(--muted)">???</span>'}
          <span class="fc-de-word">${esc(cur.lm)}</span>
        </div>
        <div style="font-size:.95rem;font-weight:700;color:var(--muted);margin-top:6px">${escBidi(cur.mn)}</div>
        <div class="fc-audio-row">
          <button class="spk" data-say="${esc(picked?(cur.a+' '+cur.lm):cur.lm)}" onclick="speakDe(this.dataset.say,this)">🔊</button>
        </div>
        <div class="art-choice-grid">
          ${['der','die','das'].map(a=>{
            let cls='art-choice c-'+a;
            if(picked){
              if(a===cur.a) cls+=' chosen-ok';
              else if(a===picked) cls+=' chosen-bad';
            }
            return `<button class="${cls}" ${picked?'disabled':''} onclick="pickArticleChoice('${a}')">${a}</button>`;
          }).join('')}
        </div>
      </div>
      ${picked?`<div class="fc-back">
        <div class="fc-divider"></div>
        <div style="text-align:center;font-size:.86rem;font-weight:800;color:${ok?'var(--ok)':'var(--bad)'};margin-bottom:8px">
          ${ok?'✅ آفرین! درست بود':'❌ آرتیکل درست: '+cur.a+' '+cur.lm}
        </div>
        ${renderCardDetails(cur)}
        ${renderExampleBox(cur)}
      </div>`:''}
    `;
    dockHtml=picked?`<button class="fc-reveal-btn" onclick="nextArticleCard()">کارت بعدی ←</button>`:'';
  }else if(s.mode==='prep_case'){
    const picked=s.prepPicked;
    const ok=picked && picked===cur.gt;
    const hasGenInLvl=DATA.some(x=>x.k==='other' && x.gt==='gen');
    const prepOpts=[
      ['akk','مفعولی','Akk.'],
      ['dat','باواسطه','Dat.'],
      ['wechsel','دووجهی','Akk./Dat.'],
      ...(hasGenInLvl?[['gen','ملکی','Gen.']]:[])
    ];
    const gtNameFa={akk:'مفعولی (<bdi dir="ltr">Akk.</bdi>)', dat:'باواسطه (<bdi dir="ltr">Dat.</bdi>)', wechsel:'دووجهی (<bdi dir="ltr">Akk./Dat.</bdi>)', gen:'ملکی (<bdi dir="ltr">Gen.</bdi>)'};
    cardInner=`
      <div class="fc-meta-row">
        <span class="fc-badge">${packBadge} · حرف اضافه</span>
        <span class="fc-box-tag">${boxLbl}</span>
      </div>
      <div class="fc-front" style="cursor:default">
        <div class="fc-de-big">
          <span class="fc-de-word">${esc(cur.lm)}</span>
        </div>
        <div style="font-size:.95rem;font-weight:700;color:var(--muted);margin-top:6px">${escBidi(cur.mn)}</div>
        <div class="fc-audio-row">
          <button class="spk" data-say="${esc(cur.lm)}" onclick="speakDe(this.dataset.say,this)">🔊</button>
        </div>
        <div class="prep-choice-grid ${prepOpts.length===3?'cols-3':''}">
          ${prepOpts.map(([k,fa,en])=>{
            let cls='prep-choice p-'+k;
            if(picked){
              if(k===cur.gt) cls+=' chosen-ok';
              else if(k===picked) cls+=' chosen-bad';
            }
            return `<button class="${cls}" ${picked?'disabled':''} onclick="pickPrepChoice('${k}')">${fa}<small>${en}</small></button>`;
          }).join('')}
        </div>
      </div>
      ${picked?`<div class="fc-back">
        <div class="fc-divider"></div>
        <div style="text-align:center;font-size:.86rem;font-weight:800;color:${ok?'var(--ok)':'var(--bad)'};margin-bottom:8px">
          ${ok?'✅ آفرین! درست بود':'❌ حالت درست: '+(gtNameFa[cur.gt]||cur.gl)}
        </div>
        ${cur.gd?`<div class="b2-rule gr-${esc(cur.gt)}"><b>📘 ${escBidi(cur.gl)}</b><div>${renderLinesWithBidi(cur.gd)}</div></div>`:''}
        ${renderExampleBox(cur)}
      </div>`:''}
    `;
    dockHtml=picked?`<button class="fc-reveal-btn" onclick="nextArticleCard()">کارت بعدی ←</button>`:'';
  }else if(s.mode==='verb_b2'){
    cardInner=`
      <div class="fc-meta-row">
        <span class="fc-badge">${packBadge} · فعل تا B2</span>
        <span class="fc-box-tag">${boxLbl}</span>
      </div>
      <div class="fc-front" onclick="flipFlashcard()">
        <div class="fc-de-big">
          <span class="fc-de-word">${esc(cur.lm)}</span>
        </div>
        <div style="font-size:.95rem;font-weight:800;color:var(--brand);margin-top:6px">${escBidi(cur.mn)}</div>
        <div class="vb2-prompt-pills">
          ${cur.vimp?'<span class="vb2-ppill">امری (du / ihr / Sie)؟</span>':''}
          <span class="vb2-ppill">التزامی ۲ (Konj. II)؟</span>
          <span class="vb2-ppill">مجهول (Passiv)؟</span>
        </div>
        <div class="fc-audio-row" onclick="event.stopPropagation()">
          <button class="spk" data-say="${esc(cur.lm)}" onclick="speakDe(this.dataset.say,this)">🔊</button>
        </div>
        ${!s.flipped?'<div class="fc-hint">صرف امری و التزامی دوم را در ذهن بگو و لمس کن</div>':''}
      </div>
      ${s.flipped?`<div class="fc-back">
        <div class="fc-divider"></div>
        ${renderCardDetails(cur)}
        ${renderExampleBox(cur)}
        ${renderConjBox(cur)}
      </div>`:''}
    `;
  }else if(s.mode==='standard'){
    const showArtOnFront=!(prefs.fcHideArticle && cur.k==='noun');
    cardInner=`
      <div class="fc-meta-row">
        <span class="fc-badge">${packBadge} · ${esc(cur.pos)}</span>
        <span class="fc-box-tag">${boxLbl}</span>
      </div>
      <div class="fc-front" onclick="flipFlashcard()">
        <div class="fc-de-big">
          ${(showArtOnFront || s.flipped)?renderArticlePill(cur.a):'<span class="art-pill" style="background:var(--surface3);color:var(--muted)">؟</span>'}
          <span class="fc-de-word">${esc(cur.lm)}</span>
        </div>
        <div class="fc-audio-row" onclick="event.stopPropagation()">
          <button class="spk" data-say="${esc(cur.lm)}" onclick="speakDe(this.dataset.say,this)">🔊</button>
        </div>
        ${!s.flipped?'<div class="fc-hint">برای دیدن معنی، جمع/صرف و مثال روی کارت بزن</div>':''}
      </div>
      ${s.flipped?`<div class="fc-back">
        <div class="fc-divider"></div>
        <div class="fc-back-mn">${escBidi(cur.mn)}</div>
        ${renderCardDetails(cur)}
        ${renderExampleBox(cur)}
        ${renderConjBox(cur)}
      </div>`:''}
    `;
  }else{
    cardInner=`
      <div class="fc-meta-row">
        <span class="fc-badge">${packBadge} · ${esc(cur.pos)}</span>
        <span class="fc-box-tag">${boxLbl}</span>
      </div>
      <div class="fc-front" onclick="flipFlashcard()">
        <div class="fc-fa-big">${escBidi(cur.mn)}</div>
        ${!s.flipped?'<div class="fc-hint">معادل آلمانی (همراه با آرتیکل/صرف) را در ذهن بگو و لمس کن</div>':''}
      </div>
      ${s.flipped?`<div class="fc-back">
        <div class="fc-divider"></div>
        <div class="fc-back-de">
          ${renderArticlePill(cur.a)}
          <b>${esc(cur.lm)}</b>
          <button class="spk sm" data-say="${esc(cur.lm)}" onclick="speakDe(this.dataset.say,this)">🔊</button>
        </div>
        ${renderCardDetails(cur)}
        ${renderExampleBox(cur)}
        ${renderConjBox(cur)}
      </div>`:''}
    `;
  }

  const isChoiceMode=(s.mode==='article' || s.mode==='prep_case');
  if(!isChoiceMode){
    if(!s.flipped){
      dockHtml=`<button class="fc-reveal-btn" onclick="flipFlashcard()">نمایش پاسخ 👁️</button>`;
    }else{
      dockHtml=`<div class="fc-rate-grid">
        <button class="rate-btn rate-again" onclick="rateFlashcard('again')"><b>↻ مرور دوباره</b><small>همین جلسه</small></button>
        <button class="rate-btn rate-good" onclick="rateFlashcard('good')"><b>👍 بلدم</b><small>${faNum(nextDays)} روز دیگر</small></button>
        <button class="rate-btn rate-easy" onclick="rateFlashcard('easy')"><b>⚡ مسلطم</b><small>جعبه ۵</small></button>
      </div>
      <div class="fc-swipe-hint">💡 روی موبایل می‌توانی کارت را به راست (بلدم) یا چپ (مرور دوباره) بکشی</div>`;
    }
  }

  let cardExtraCls='';
  if(s.mode==='article' && s.artPicked) cardExtraCls=(s.artPicked===cur.a?'ans-right':'ans-wrong');
  if(s.mode==='prep_case' && s.prepPicked) cardExtraCls=(s.prepPicked===cur.gt?'ans-right':'ans-wrong');

  document.getElementById('appView').innerHTML=`
    <div class="fc-top">
      <button class="fc-close" onclick="state.session=null;renderReviewTab()" title="خروج از جلسه">✕</button>
      <div class="fc-prog-bar"><div class="fc-prog-fill" style="width:${pct}%"></div></div>
      <span class="fc-cnt">${faNum(s.idx+1)} / ${faNum(s.queue.length)}</span>
    </div>
    <div class="fc-stage">
      <div id="fcCard" class="fc-card ${cardExtraCls}">${cardInner}</div>
    </div>
    <div class="fc-dock">${dockHtml}</div>
  `;

  if(!isChoiceMode && s.flipped) attachSwipeHandlers();
}

function attachSwipeHandlers(){
  const card=document.getElementById('fcCard');
  if(!card) return;
  let sx=0, sy=0, dx=0, tracking=false;
  card.addEventListener('touchstart', e=>{
    if(e.touches.length!==1) return;
    sx=e.touches[0].clientX; sy=e.touches[0].clientY; dx=0; tracking=true;
    card.style.transition='none';
  }, {passive:true});
  card.addEventListener('touchmove', e=>{
    if(!tracking) return;
    const cx=e.touches[0].clientX, cy=e.touches[0].clientY;
    dx=cx-sx;
    if(Math.abs(cy-sy)>Math.abs(dx)*1.2 && Math.abs(dx)<18){ tracking=false; card.style.transform=''; return; }
    card.style.transform=`translateX(${dx*0.65}px) rotate(${dx*0.03}deg)`;
    card.classList.toggle('swipe-ok', dx>65);
    card.classList.toggle('swipe-bad', dx<-65);
  }, {passive:true});
  card.addEventListener('touchend', ()=>{
    if(!tracking) return;
    tracking=false;
    card.style.transition='transform .2s ease';
    if(dx>80){ rateFlashcard('good'); }
    else if(dx<-80){ rateFlashcard('again'); }
    else{
      card.style.transform='';
      card.classList.remove('swipe-ok','swipe-bad');
    }
  });
}

function renderReviewTab(){
  if(state.session) renderActiveSession();
  else renderReviewDashboard();
}

// =========================================================
// VIEW 4: GLOBAL SEARCH TAB
// =========================================================
function setSearchScope(scope){
  state.searchScope=(scope==='current')?'current':'all';
  state.limit=45;
  if(state.searchScope==='all' && !allLevelsLoaded()){
    ensureAllLevelsLoaded().then(()=>{
      renderLevelBar();
      if(state.tab==='search' && state.searchScope==='all') renderSearchTab();
    }).catch(()=>{});
  }
  renderSearchTab();
}

function renderSearchTab(){
  document.getElementById('backBtn').classList.remove('show');
  sanitizeB2State();
  const curScoped=getScopedUnique();
  const isAll=(state.searchScope==='all');
  if(isAll && !allLevelsLoaded()){
    ensureAllLevelsLoaded().then(()=>{
      renderLevelBar();
      if(state.tab==='search' && state.searchScope==='all') renderSearchTab();
    }).catch(()=>{});
  }
  const scoped=isAll?ensureGlobalSorted():curScoped;
  const allowed=['all','noun','verb','adj','other','pl','b2_ndekl','b2_preps','b2_np'];
  if(!allowed.includes(state.searchKind)) state.searchKind='all';

  document.getElementById('topTitle').textContent=isAll?'🔍 جست‌وجوی سراسری (A1 تا B2)':`🔍 جست‌وجو در سطح ${activeLevel}`;
  document.getElementById('topSub').textContent=isAll
    ?`جست‌وجوی یکپارچه در ${faNum(GLOBAL_UNIQUE_LIST.length)} واژهٔ یکتا (کل ۴ سطح)`
    :`جست‌وجو از ابتدای واژه در ${faNum(curScoped.length)} واژه و عبارت سطح ${activeLevel}`;

  const view=document.getElementById('appView');
  if(!document.getElementById('globalSearchIn')){
    const letters=['همه',...'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ'.split('')];
    view.innerHTML=`<div class="subbar">
      <div id="searchScopeBar" class="search-scope-bar"></div>
      <div class="search-wrap">
        <span class="search-ico">🔍</span>
        <input id="globalSearchIn" class="search-in" value="${esc(state.searchQuery)}" placeholder="اسم، فعل، صفت یا عبارت (آلمانی یا فارسی) را بنویس…" autocomplete="off" oninput="onSearchInput(this.value)" onkeydown="onSearchKeydown(event,'search')">
        <button id="searchClrBtn" class="search-clr ${state.searchQuery?'show':''}" onclick="onSearchInput('')">✕</button>
      </div>
      <div id="searchKindRow" class="chips-row"></div>
      <div id="searchAlphaRow" class="alpha-row">${letters.map((l,i)=>`<button class="alpha-btn ${(i===0&&!state.searchAlpha)||(state.searchAlpha===l)?'active':''}" onclick="setSearchAlpha('${i===0?'':l}')">${l}</button>`).join('')}</div>
      <div class="lesson-tools">
        <span id="searchCntLbl" class="count-lbl"></span>
        <button id="searchQuizBtn" class="quiz-pill ${state.quizMask?'on':''}" onclick="state.quizMask=!state.quizMask;renderSearchTab()">👁️ مخفی معنی</button>
      </div>
    </div><div id="searchListBox"></div>`;
  }

  document.getElementById('searchScopeBar').innerHTML=`
    <button class="scope-btn ${!isAll?'active':''}" onclick="setSearchScope('current')">📍 فقط سطح فعلی (${activeLevel} · ${faNum(curScoped.length)})</button>
    <button class="scope-btn ${isAll?'active':''}" onclick="setSearchScope('all')">🌐 همهٔ ۴ سطح (${faNum(GLOBAL_UNIQUE_LIST.length)})</button>
  `;

  const kChips=[
    ['all','همه',false],
    ['noun','اسم‌ها',false],
    ['verb','فعل‌ها',false],
    ['adj','صفت‌ها',false],
    ['other','عبارت و قید',false],
    ['pl','فقط‌جمع (Pl.)',false]
  ];
  if(prefs.showB2Grammar){
    kChips.push(
      ['b2_ndekl','⚠️ اسم ضعیف / صفتی',true],
      ['b2_preps','📘 حروف اضافه و ربط',true],
      ['b2_np','🔗 اسم/صفت + حرف اضافه',true]
    );
  }
  document.getElementById('searchKindRow').innerHTML=kChips.map(([k,lbl,isB2])=>
    `<button class="chip ${isB2?'b2-chip':''} ${state.searchKind===k?'active':''}" onclick="state.searchKind='${k}';state.limit=45;renderSearchTab()">${lbl}</button>`
  ).join('');
  document.getElementById('searchClrBtn').classList.toggle('show', !!state.searchQuery);
  document.getElementById('searchQuizBtn').classList.toggle('on', state.quizMask);

  const sk=state.searchKind;
  const sa=state.searchAlpha;
  const base=(sk==='all' && !sa)?scoped:scoped.filter(x=>{
    if(sk==='pl' && x.a!=='pl') return false;
    else if(sk==='b2_ndekl' && !(x.k==='noun' && !!x.nd)) return false;
    else if(sk==='b2_preps' && !(x.k==='other' && !!x.gt)) return false;
    else if(sk==='b2_np' && !((x.k==='noun' && !!x.np) || (x.k==='adj' && !!x.ap))) return false;
    else if((sk==='noun'||sk==='verb'||sk==='adj'||sk==='other') && x.k!==sk) return false;
    if(sa && getCleanHw(x).charAt(0).toUpperCase()!==sa) return false;
    return true;
  });

  const q=state.searchQuery.trim();
  const filtered=sortPrefixMatches(base, q, isAll);

  document.getElementById('searchCntLbl').textContent=`${faNum(filtered.length)} نتیجه${isAll?' در ۴ سطح':` در ${activeLevel}`}`;
  let listHtml='';
  if(!filtered.length){
    listHtml=`<div class="empty-state">${q?`هیچ واژه‌ای که با «${esc(q)}» شروع شود پیدا نشد.`:'هیچ واژه‌ای با این فیلتر پیدا نشد.'}</div>`;
  }else{
    const shown=filtered.slice(0, state.limit);
    const hdr=q?`نزدیک‌ترین نتایج برای «${esc(q)}»`:(isAll?'فهرست فشردهٔ کل ۴ سطح':'فهرست فشردهٔ واژگان');
    listHtml=`<div class="sug-head"><span>${hdr}</span><span>لمس = صفحهٔ کلمه</span></div>
      <div class="sug-box">
        ${shown.map(x=>renderCompactSuggestionRow(x, q, isAll)).join('')}
        ${filtered.length>state.limit?`<button class="sug-more-btn" onclick="state.limit+=60;renderSearchTab()">نمایش نتایج بیشتر (${faNum(filtered.length-state.limit)} باقی‌مانده)…</button>`:''}
      </div>`;
  }
  document.getElementById('searchListBox').innerHTML=listHtml;
}

let _searchDeb=null;
function onSearchInput(val){
  state.searchQuery=val; state.limit=45;
  const inp=document.getElementById('globalSearchIn'); if(inp && inp.value!==val) inp.value=val;
  clearTimeout(_searchDeb);
  if(!val){ renderSearchTab(); return; }
  _searchDeb=setTimeout(renderSearchTab, 85);
}
function setSearchAlpha(ch){
  state.searchAlpha=ch; state.limit=45;
  document.querySelectorAll('#searchAlphaRow .alpha-btn').forEach((b,i)=>{
    b.classList.toggle('active', (i===0 && !ch) || b.textContent===ch);
  });
  renderSearchTab();
}

function renderApp(){
  if(state.activeWordId){
    renderWordPage();
    return;
  }
  if(state.tab==='lessons'){
    if(state.activePack) renderPackDetail();
    else renderLessonsHome();
  }else if(state.tab==='verbs'){
    renderVerbsTab();
  }else if(state.tab==='review'){
    renderReviewTab();
  }else{
    renderSearchTab();
  }
}

// =========================================================
// PHASE 4: PWA INSTALL PROMPT & SERVICE WORKER
// =========================================================
let deferredInstallPrompt=null;
const isStandalone=window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone===true;

window.addEventListener('beforeinstallprompt', e=>{
  e.preventDefault();
  deferredInstallPrompt=e;
  const tb=document.getElementById('btnInstallTop');
  if(tb && !isStandalone) tb.classList.add('show');
  refreshPwaUI();
});

window.addEventListener('appinstalled', ()=>{
  deferredInstallPrompt=null;
  const tb=document.getElementById('btnInstallTop');
  if(tb) tb.classList.remove('show');
  refreshPwaUI();
  showToast('اپلیکیشن روی صفحهٔ اصلی نصب شد!', '🎉 نصب موفق', 't-human');
});

async function triggerInstall(){
  if(!deferredInstallPrompt){
    openSettings();
    return;
  }
  deferredInstallPrompt.prompt();
  const res=await deferredInstallPrompt.userChoice;
  if(res && res.outcome==='accepted'){
    deferredInstallPrompt=null;
    const tb=document.getElementById('btnInstallTop');
    if(tb) tb.classList.remove('show');
  }
  refreshPwaUI();
}

function refreshPwaUI(){
  const area=document.getElementById('pwaInstallArea');
  const lbl=document.getElementById('pwaStatusLbl');
  if(!area) return;
  if(isStandalone){
    if(lbl) lbl.textContent='هم‌اکنون در حالت اپلیکیشن مستقل (تمام‌صفحه) اجرا می‌شود ✅';
    area.innerHTML='<div class="pwa-card"><b>✅ نصب‌شده روی گوشی:</b> اپلیکیشن به‌صورت تمام‌صفحه و آمادهٔ استفادهٔ آفلاین است.</div>';
  }else if(deferredInstallPrompt){
    if(lbl) lbl.textContent='مرورگر آمادهٔ نصب مستقیم این وب‌اپ روی صفحهٔ اصلی است';
    area.innerHTML='<div class="s-btn-group"><button class="s-btn" style="background:var(--brand);color:#fff;border-color:var(--brand)" onclick="triggerInstall()">📲 نصب مستقیم روی صفحهٔ اصلی گوشی</button></div>';
  }else if(location.protocol==='file:'){
    if(lbl) lbl.textContent='فایل به‌صورت محلی باز شده است (همه امکانات و کش صدا فعال‌اند)';
    area.innerHTML='<div class="pwa-card">برای اجرای <b>تمام‌صفحه بدون نوار مرورگر</b> با آیکون اختصاصی، فایل‌های بستهٔ PWA را در GitHub Pages یا Netlify Drop آپلود کن و از منوی کروم گزینهٔ <b>Add to Home screen / Install app</b> را بزن.</div>';
  }else{
    if(lbl) lbl.textContent='آماده برای افزودن به صفحهٔ اصلی از منوی کروم';
    area.innerHTML='<div class="pwa-card">در کروم اندروید روی منوی سه‌نقطه (<b>⋮</b>) بالا سمت راست بزن و گزینهٔ <b>Install app</b> یا <b>Add to Home screen</b> را انتخاب کن.</div>';
  }
}

// Register Service Worker cleanly when served over HTTPS / localhost
if('serviceWorker' in navigator && (location.protocol==='https:' || location.hostname==='localhost' || location.hostname==='127.0.0.1')){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('./sw.js').catch(()=>{});
  });
}

// Support Android launcher shortcuts (?tab=verbs / ?tab=review / ?tab=search)
try{
  const urlTab=new URLSearchParams(location.search).get('tab');
  if(urlTab && ['lessons','verbs','review','search'].includes(urlTab)){
    state.tab=urlTab;
    document.querySelectorAll('.btab').forEach(b=>b.classList.toggle('active', b.dataset.tab===urlTab));
  }
}catch(e){}


// Splash controller is inline in index.html for instant frame-1 animation!

// Async Boot: Instant Theme + Fast Active-Level Decompression (~20ms) + Silent Background Hydration
setTheme(prefs.theme);
renderLevelBar();
(async function bootApp(){
  try{
    await ensureLevelLoaded(activeLevel);
    DATA=ALL_DATA[activeLevel];
    syncB2Buttons();
    updateDueBadge();
    renderLevelBar(activeLevel);
    renderApp();
    hydrateRemainingLevels();
  }catch(err){
    dismissBabaSplash();
    const v=document.getElementById('appView');
    if(v) v.innerHTML='<div class="empty-state"><b>مرورگر شما قدیمی است</b><br>برای باز کردن دیتابیس فشردهٔ نسخهٔ ۳.۴ لطفاً از نسخهٔ جدید Chrome یا Edge استفاده کنید.</div>';
  }
})();
