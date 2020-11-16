import React, { useState } from 'react';

import AboutMe from './AboutMe';
import Description from './Description';
import Steps from './Steps';
import Projects from './Projects';
import Contact from './Contact';
import Dot from './Dot';

const TextBody = (props) => {
  // hooks declaration

  const [isDotActive, setIsDotActive] = useState(false);

  const wordShort = ' .call ';
  const wordLong = ' Object.defineProperty(e, if "__esModule" ';
  const sentenceShort =
    '  (e){var t={  function n(r){if (t[r] !=typeof)return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}}; return e[r]. call(i.exports ,i,i.exports, n),i.l=! 0,i. exports} default ';

  const sentenceMedium =
    ' !function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}}; return e[r].call(i.exports,i,i.exports, n),i.l=!0,i.exports} n.m=e,n.c=t,n.d=function (e,t,r){n.o(e,t)||Object.defineProperty (e,t, {enumerable:!0,get:r})} ,n.r=function   ';

  const sentenceLong =
    ' (e){var t={}; function n(r){if(t[r]) return t[r].exports; var i=t[r] ={i:r,l:!1, exports:{}} ; return e[r].call(i.exports,i,i.exports, n),i.l=!0,i.exports} n.m=e,n.c=t,n.d=function (e,t,r){n.o(e,t)||Object .defineProperty (e,t, {enumerable:!0,get:r})} ,n.r=function(e){"undefined" !=typeof Symbol&& Symbol.toString Tag&& Object.defineProperty(e,Symbol. toStringTag, {value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})} ,n.t=function (e,t) {if (1&t&&(e=n(e)),8&t) return e;if(4&t&&"object"==typeof e&&e&&e.__esModule) return e;var r=Object.create  (null);if(n.r(r), Object. define Property(r,"default",{ enumerable:!0,value:e}),2&t&&"string"!=typeof e) for (var i in e)n.d(r,i, function(t) {return e[t]}. bind (null,i));return r},n.n=function(e){var t=e&&e .__esModule ?function() {return e.default} : function (){ return e};return n.d(t,"a",t) ,t} ,n.o=function (e,t) {return Object. prototype. hasOwnProperty .call(e,t)},n.p="",n(n.s=92)}([ function (e,t,n) ++){var n=arguments [t];for(var r in n)Object. prototype. hasOwnProperty .call(n,r) && (e[r]=n[r])} return e}).apply  (this,arguments )} var m=function (e,t){ for(var n=[e[0]], r=0, i=t. length;r<i;r+=1) n.push (t[r],e[r+1]) ;return n}, h=function (e){ return null!==e&&"object"== typeof e&&"[object Object] "===( e.toString ?e.toString() :Object.prototype. toString.call (e))&& !Object(r.typeOf)(e)},v=Object.freeze([]),g=Object.fr {"use strict";e.e xports=n(53)},function (e,t,n){"use strict";(function (e){n.d(t,"b",( function(){ return Ae}));var r=n(21), i=n(0),o=n.n(i),a=n (50), l=n.n(a) ,u=n(51), c=n(52), s=n(33), f=n(32), d=n.n(f) ;function p()   =Object.assign || function(e) {for(var t=1;t <arguments .length; teeze ({}); function y(e) { return "function" == typeof e} function b(e){ return e.displayName || e.name || "Component"} function w(e) {return e&&"string" == typeof e.styled ComponentId } var k=void const REACT_APP_SC_ATTR || e.env.SC_ATTR ) || "data-styled" ,x= "undefined"  !=typeof window && "HTMLElement "in window, S=Boolean ("boolean"  == typeof   SC_DISABLE_SPEEDY? SC_DISABLE_SPEEDY :void 0!==e&&void 0!==e.env.REACT_APP_SC_ DISABLE_SPEEDY ""!==e.env. (var r in n) Object.prototype. hasOwnProperty .call (n,r) && (e [r]=n[r] )} return e}) .apply (this ,arguments )} var m=function (e,t)  var n=[e[0]] ,r=0, i=t.length; r<i;r+=1)  (t[r],e[r+1]); return n}, h=function (e) {return null! ==e && "object" == typeof e&&" [object Object]"   (e. toString ?e. toString() :Object .prototype .toString .call(e)) &&  !Object (r.typeOf ) (e)} ,v= Object. freeze ([]),g = Object .fr {"use strict"; e.exports=n(53) }, function (e,t,n) {"use strict"; (function(e) {n.d (t,"b",   ';

  // handle

  const handleDotsClick = () => {
    setIsDotActive(!isDotActive);
    console.log('klikkakakakkaa');
  };

  return (
    <React.Fragment>
      <div className='text-body'>
        <div className='text-body__paragraph'>
          {sentenceShort}
          {sentenceShort}
          <AboutMe />
          {sentenceShort}
          <Description />
          {sentenceMedium}
          <Steps />
          {sentenceMedium}
          {sentenceMedium}
          {sentenceMedium}
          {wordShort}
          {wordLong}
          <Projects />
          {wordShort}
          {sentenceLong}
          {wordShort}

          <span className='text-body__menu ' onClick={handleDotsClick}>
            Choose your favourite color:{' '}
          </span>
          {sentenceShort}
          {wordLong}
          {wordShort}
          <div
            className={` ${
              isDotActive
                ? 'animation__dots-container'
                : 'animation__dots-container none'
            }`}
          >
            <Dot color={'white'} />
            <Dot color={'black'} />
            <Dot color={'silver'} />
          </div>
          {sentenceLong}
          {sentenceLong}
          {sentenceLong}
          <Contact />
        </div>
      </div>
    </React.Fragment>
  );
};

export default TextBody;