import{_ as i,c as a,a0 as n,o as p}from"./chunks/framework.CN25_6N6.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"ta-module.md","filePath":"ta-module.md"}'),l={name:"ta-module.md"};function h(k,s,t,e,E,r){return p(),a("div",null,s[0]||(s[0]=[n(`<h2 id="归因模块" tabindex="-1">归因模块 <a class="header-anchor" href="#归因模块" aria-label="Permalink to &quot;归因模块&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如需使用源sdk，联系开发者</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> initParams</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    token: string </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Adjust-token</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    environment: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;production&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;sandbox&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 环境类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    logLevel: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;verbose&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;info&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;warning&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;error&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;none&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 日志级别</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 初始化后成功回调</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { e, attribution } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FreyjaSDK.adjust.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(initParams)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /* </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *  绑定用户数数信息-集成方法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *      注：采用数数taSetOnce</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *      注： init初始化后的attribution作为入参进行绑定数数信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *      1. 设置用户的user_is_origin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *      2. 设置用户 user_ad_id</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *      3. 设置用户 user_adjust_webuuid</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> attribution</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.adjust.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bindUserInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 支付事件上报</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    eventToken: params.eventId, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 事件ID</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    revenue: params.price, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 金额</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    currency: params.code </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// code </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.adjust.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendPayEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 通用事件上报</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    eventToken: params.eventId, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 事件ID</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [key:string]: any</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.adjust.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendTrack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params)</span></span></code></pre></div><h2 id="数数模块" tabindex="-1">数数模块 <a class="header-anchor" href="#数数模块" aria-label="Permalink to &quot;数数模块&quot;">​</a></h2><div class="language-javaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javaScript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Ta设置一次性属性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taSetOnce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name, value)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置公有属性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taSetCommonProperties</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({key:value})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置用户属性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taSetUserProperties</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({key:value})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置自定义访客ID   - 一般在初始话SDK后立即配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taSetIdentify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id)    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置账号ID  - 建议业务用户登录后设置数数账号ID</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taLogin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id:number)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 清除账号ID</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taLogout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 发送一次事件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taSendFirst</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(eventName, {key:value})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 事件消耗时间    配套使用，单一无统计</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taTimeEventBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(eventName)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taTimeEventLater</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(eventName, {key,value})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*   激活事件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*       融合方法, 包含数数设置访客ID及设置激活事件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*       默认eventName: XWEB_ACTIVATE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taActivate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cid, eventName)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*   上报事件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*       </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> taParams</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [key:string] : any</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taShow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(taParams) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认事件名：XWEB_SHOW</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(taParams) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认事件名：XWEB_CLICK</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taOperation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(taParams) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认事件名：XWEB_OPERATION</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taPayShow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(taParams)   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认事件名：XWEB_IAP_PAY_SHOW</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">taPayClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(taParams)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认事件名：XWEB_IAP_PAY_CLICK</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FreyjaSDK.ta.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendTa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(eventName: string, taParams) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 兜底使用</span></span></code></pre></div>`,4)]))}const g=i(l,[["render",h]]);export{y as __pageData,g as default};
