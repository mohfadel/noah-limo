$(function(){

  var CONTACT_PHONE = '+201550055896';

  $('#phoneCall').click(function() {
      window.location.href = 'tel://' + CONTACT_PHONE;
  });

  $('#whatsappChat').click(function() {
      var shareText = '';
      const whatsappUrl = `whatsapp://send?phone=${CONTACT_PHONE}&text=${encodeURIComponent(shareText)}`;
      // Open WhatsApp with the share URL
       window.location.href = whatsappUrl;
  });

  let customerLang = getCookie("customerLang");
  if(customerLang === null || customerLang === 'eg'){
    changeLang(document.getElementById('arLangBtn'),'eg');
  } else {
    changeLang(document.getElementById('enLangBtn'),'us');
  }
  

});


function changeLang(langButton, selectedLang) {
  
  addClass(langButton, 'active');
  document.getElementById("languageSelected").className = "flag flag-" + selectedLang;
  document.cookie = "customerLang="+selectedLang;

  if(selectedLang == 'eg') {

    removeClass(document.getElementById("enLangBtn"), "active");
    document.documentElement.setAttribute('lang','ar');
    document.documentElement.setAttribute('dir','rtl');
    document.getElementById("bootstrapCss").href = "assets/dist/css/bootstrap.rtl.min.css";
    document.getElementById("carouselCss").href = "assets/dist/css/carousel.rtl.css";
    document.getElementById("carouselCanonical").href = "https://getbootstrap.com/docs/5.3/examples/carousel-rtl/";
    document.title = "نوح ليموزين";
    document.getElementById("navBarBrand").innerText="نوح ليموزين";
    document.getElementById("mainPageNavBar").innerText="الصفحة الرئيسية";
    document.getElementById("whoAreWeNavBar").innerText="من نحن";
    document.getElementById("contactUsNavBar").innerText="تواصل معنا";

    //Theme
    //document.getElementById("themeLight").innerText="ضوء";
    //document.getElementById("themeDark").innerText="ظلام"; 
    //document.getElementById("themeAuto").innerText="أتوماتيك"; 

    //carousel
    document.getElementById("carouselTitle1").innerText="الأسر الكبيره"; 
    document.getElementById("carouselText1").innerText="نقل اسره ٦ افراد";
    document.getElementById("carouselTitle2").innerText="متعة السفر"; 
    document.getElementById("carouselText2").innerText="سيارة سيدان للراحة والرفاهية";
    document.getElementById("carouselTitle3").innerText="عنوان للرفاهية"; 
    document.getElementById("carouselText3").innerText="سيارة سيدان للتنقل الآمن";

    //marketing
    document.getElementById("marketingTitle1").innerText="جميع مطارات مصر";
    document.getElementById("marketingText1").innerText="تمتع بأفضل خدمة توصيل المطار وبأقل الأسعار";
    document.getElementById("marketingTitle2").innerText="بين المحافظات";
    document.getElementById("marketingText2").innerText="سيارات حديثة ومكيفة، وسائقين مؤهلات عليا وخبرة بخدمة الليموزين";
    document.getElementById("marketingTitle3").innerText="حفلات زفاف";
    document.getElementById("marketingText3").innerText="سيارات فارهة لحفلات الزفاف"; 

    //feature 1
    document.getElementById("feature1Title").innerText="من نحن ؟  ō͡≡о";
    document.getElementById("feature1Line1").innerText="واحدة من أفضل شركات الليموزين والنقل السياحي داخل مصر";
    document.getElementById("feature1Line2").innerText="مجموعة متنوعة من السيارات الفاخرة، بدءًا من السيدان وصولًا إلى سيارات SUVs و H1 و HIACE المريحة";
    document.getElementById("feature1Line3").innerText="مجموعة سائقين مدربين جيدًا على أفضل الطرق وجودة القيادة والتعامل مع مختلف الظروف";
    document.getElementById("feature1Line4").innerText="نفهم أهمية التوقيت. يقدم فريقنا خدمة مرنة  تحديد الجدول الزمني الذي يناسبك";
    document.getElementById("feature1Line5").innerText="اتركوا لنا الاهتمام بتفاصيل النقل، واستمتعوا بكل لحظة من يومكم الخاص";
    
    //feature 2
    document.getElementById("feature2Title").innerText="خدمتنا مميزة 🛞";
    document.getElementById("feature2Line1").innerText="نقدم خدمة ليموزين المؤتمرات لدينا حلاً نقلًا فاخرًا للمساهمة في نجاح المؤتمرات والاجتماعات";
    document.getElementById("feature2Line2").innerText="ندرك مدى أهمية راحة رجال الأعمال في إنتاجيتهم";
    document.getElementById("feature2Line3").innerText="تقدم خدمة الليموزين لحفلات الزفاف لدينا سيارات فاخرة مجهزة";
    document.getElementById("feature2Line4").innerText="اختيار السيارة التي تتناسب مع ذوقك واحتياجك";

    //feature 3
    document.getElementById("feature3Title").innerText="تواصل معنا 📱";
    document.getElementById("feature3Line4").innerText="اأبراج سيتي لايت السيوف شماعة - الإسكندرية";

  } else if(selectedLang == 'us') {

    removeClass(document.getElementById('arLangBtn'), 'active');
    document.documentElement.setAttribute('lang','en');
    document.documentElement.removeAttribute("dir");
    document.getElementById("bootstrapCss").href = "assets/dist/css/bootstrap.min.css";
    document.getElementById("carouselCss").href = "assets/dist/css/carousel.css";
    document.getElementById("carouselCanonical").href = "https://getbootstrap.com/docs/5.3/examples/carousel/";
    document.title = "Noah Limousine";
    document.getElementById("navBarBrand").innerText="Noah Limousine";
    document.getElementById("mainPageNavBar").innerText="Main Page";
    document.getElementById("whoAreWeNavBar").innerText="About Us";
    document.getElementById("contactUsNavBar").innerText="Contact Us";

    //Theme
    //document.getElementById("themeLight").innerText="Light";
    //document.getElementById("themeDark").innerText="Dark"; 
    //document.getElementById("themeAuto").innerText="Auto"; 

    //carousel
    document.getElementById("carouselTitle1").innerText="Large families"; 
    document.getElementById("carouselText1").innerText="Transporting a family of 6 people";
    document.getElementById("carouselTitle2").innerText="Delight of travel"; 
    document.getElementById("carouselText2").innerText="A sedan for comfort and luxury";
    document.getElementById("carouselTitle3").innerText="Address of luxury"; 
    document.getElementById("carouselText3").innerText="Sedan for safe transportation";



    //marketing
    document.getElementById("marketingTitle1").innerText="All airports in Egypt";
    document.getElementById("marketingText1").innerText="Enjoy the best airport delivery service at the lowest prices";
    document.getElementById("marketingTitle2").innerText="Between Cities";
    document.getElementById("marketingText2").innerText="Modern, air-conditioned cars, highly qualified drivers with experience in limousine service";
    document.getElementById("marketingTitle3").innerText="Wedding parties";
    document.getElementById("marketingText3").innerText="Luxury cars for weddings";

    //feature 1
    document.getElementById("feature1Title").innerText="About Us ō͡≡о";
    document.getElementById("feature1Line1").innerText="One of the best limousine and tourist transportation companies in Egypt";
    document.getElementById("feature1Line2").innerText="A variety of luxury cars, from sedans to comfortable SUVs, H1 and HIACE";
    document.getElementById("feature1Line3").innerText="A group of drivers well trained on the best roads, driving quality";
    document.getElementById("feature1Line4").innerText="We understand the importance of time, we offers a flexible schedule that suits you";
    document.getElementById("feature1Line5").innerText="Let us take care of the transportation details, and enjoy every moment of your day";

    //feature 2
    document.getElementById("feature2Title").innerText="Excellent service 🛞";
    document.getElementById("feature2Line1").innerText="Our conference limousine service offers a luxury transportation solution to contribute to the success of conferences and meetings";
    document.getElementById("feature2Line2").innerText="We understand how important business comfort is to their productivity";
    document.getElementById("feature2Line3").innerText="Our wedding limousine service offers luxury decorated cars";
    document.getElementById("feature2Line4").innerText="Choosing the car that suits your personality and needs";

    //feature 3
    document.getElementById("feature3Title").innerText="Contact Us 📱";
    document.getElementById("feature3Line4").innerText="City Light Towers, El Seyouf Shamaah - Alexandria";
  }
  
}

function hasClass(el, className)
{
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className)
{
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el, className)
{
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

function getCookie(cName) {
      let cookieStr = document.cookie;
      if (cookieStr != null && cookieStr.length > 0)
      {
        const name = cName + "=";
        const cDecoded = decodeURIComponent(cookieStr); //to be careful
        const cArr = cDecoded .split('; ');
        let res;
        cArr.forEach(val => {
            if (val.indexOf(name) === 0) res = val.substring(name.length);
        })
        return res;
      }
      return null;
}