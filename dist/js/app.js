$(document).ready(function(){function t(){var t={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,i,a){t[i]=a});return t}function e(t){for(var e=t+"=",i=document.cookie.split(";"),a=0;a<i.length;a++){for(var n=i[a];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return null}$(window).scroll(function(){return $("nav").toggleClass("fixed",$(window).scrollTop()>0)}),$(".scroll").click(function(t){event.preventDefault();var e=$(this).attr("href"),i=$(e).offset().top;$("body,html").animate({scrollTop:i-80},1500)}),$(".photo-slider").slick({dots:!0,infinite:!0,speed:300,arrows:!1,autoplay:!0,autoplaySpeed:2e3,slidesToShow:1});var i,a='<svg style="width: 20px; position:absolute;top: 55%;right: 10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg>';$(".submit").click(function(t){t.preventDefault(),$(".allert").remove(),$(".label").removeClass("active");var e=$(this).closest("form").find("[required]");$(e).each(function(){if(""==$(this).val()){$(this);if("email"==$(this).attr("type")){var t=/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;if(!t.test($(this).val()))return $("input[name=email]").val(""),$(this).addClass("error").parent(".label").append('<div class="allert">'+a+"</div>"),i=1,$(":input.error:first").focus(),!1}else{if("tel"!=$(this).attr("type"))return $(this).addClass("error").parent(".label").append('<div class="allert">'+a+"</div>"),i=1,$(":input.error:first").focus(),!1;var e=/^()[- +()0-9]{9,18}/i;if(!e.test($(this).val()))return $("input[name=phone]").val(""),$(this).addClass("error").parent(".label").append('<div class="allert">'+a+"</div>"),i=1,$(":input.error:first").focus(),!1}return i=1,!1}i=0,$(this).addClass("error").parent(".label").find(".allert").remove()}),1!==i&&$(this).unbind("submit").submit()}),$('input[name="utm_source"]').val(t().utm_source),$('input[name="utm_campaign"]').val(t().utm_campaign),$('input[name="utm_medium"]').val(t().utm_medium),$('input[name="utm_term"]').val(t().utm_term),$('input[name="utm_content"]').val(t().utm_content),$('input[name="click_id"]').val(t().aff_sub),$('input[name="affiliate_id"]').val(t().aff_id),$('input[name="user_agent"]').val(navigator.userAgent),$('input[name="ref"]').val(document.referrer),$('input[name="page_url"]').val(window.location),$.get("https://ipinfo.io",function(t){$('input[name="ip_address"]').val(t.ip),$('input[name="city"]').val(t.city),$('input[name="country"]').val(t.country),$('input[name="region"]').val(t.region)},"jsonp"),$('input[name="phone"]').inputmask("+38(099) 99 999 99"),setTimeout(function(){$(".gclid_field").val(e("gclid")),""==$(".gclid_field").val()&&$(".gclid_field").val(e("_gid"))},2e3),$("form").on("submit",function(t){t.preventDefault();var e=$(this);e.find(".submit").addClass("inactive"),e.find(".submit").prop("disabled",!0),$.ajax({type:"POST",url:"mail.php",dataType:"json",data:e.serialize(),success:function(t){}}),setTimeout(function(){window.location.href="success.html"},1e3)}),$("#nav-icon").click(function(){$("img[data-src]").each(function(){$(this).attr("src",$(this).data("src"))}),$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open"),$("#menu").slideToggle(200)}),$("#menu, .scroll").hover(function(){$("img[data-src]").each(function(){$(this).attr("src",$(this).data("src"))})});var n=lozad();n.observe()});