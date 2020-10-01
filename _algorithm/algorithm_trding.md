---
title: "알고리즘 트레이딩"
date: 2020-09-25 20:32:28 -0400
categories: algorithm
tags: [algorithm]
---

**Studying algorithm trading system**

This is a real contents that I wrote on my mac using xingAPI, made by eBEST Investment & Securities Co., Ltd.
I made my mind to write python language at first.

But I recognized the python library modules on xingAPI, like other common security API systems provided by Investment companies on Republic of Korea,
doesn't support on MacOSX. They only support libraries on windows system to use 'com32com.client'.

Ironically xingAPI support mobile MacOSX API library, so I chose xingAPI module to study algorithm trading system.
 
- LoginViewController.swift
~~~
    //로그인 클릭 이벤트
    @IBAction func OnLoginBtnClicked(_ sender: Any) {
        resultLabel.text = ""
        
        let login = eBESTAPI.isLogin()
        
        if login == true {
            eBESTAPI.logout()
            LoginBtn.setTitle("로그인", for: UIControl.State.normal)
            resultLabel.text = "당신은 Dennis Na 가 만들고 있는 algorithm trading system 으로부터 로그아웃 되었습니다."
            
        } else {
            
            //일반적으로 화면에서는 viewDidLoad 함수에서 한번만 InitView를 호출하면 되지만
            //로그아웃 또는 discount시 모든 handle이 지워지기 때문에
            //로그아웃이 있는 화면은 로그인시 화면을 등록하고 새로운 핸들번호를 받아와야 한다.
            m_apihandle = eBESTAPI.initView(self, name:"LoginViewController")
            print(" aip handle : \(m_apihandle)")
            
            //API 코어에서 더 이상 핸드를 보유하고 있지 않는 경우 m_apihandle 값이 -1이 된다
            //-1인 경우에 서로다른 이름으로 무수히 많이 eBESTAPI.InitView 함수가 호출되지 않았나 확인해 봐야 한다.
            //위에서 언급한 아주 특별한 경우가 아닌 이상 일반적으로 -1 값이 나오는 경우는 없다.
            if m_apihandle > 0
            {
                // MOTU_SERVER // 모의 투사 서버
                // API_SERVER // 실서버
                let loginData = LOGIN_DATA(m_apihandle, connect_server: SERVER_TYPE.MOTU_SERVER)
                // var loginData = LOGIN_DATA(m_apihandle, connect_server: SERVER_TYPE.API_SERVER);
                /* 위의 두 라인이 모의 투자 서버에 접속인지 실서버에 접속인지를 구분하는 라인이다. */

                eBESTAPI.login(self, loginData: loginData)
            }
        }
    }
    
    
    // API framework에서 호출되는 이벤트
    func onReceiveData(_ data: ReceiveData!) {
        
    }
    
    // tr 요청 결과 메시지
    func onReceiveMessage(_ msg: ReceiveMessage!) {
        resultLabel.text = msg.message
    }
    
    func onReceiveError(_ msg: ReceiveMessage!) {
        resultLabel.text = msg.message
    }
    
    func onReleaseData(_ rqID: Int, code: String!) {
        
    }
~~~


- API 로부터 로그인 결과 응답

~~~
    // 로그인 결과 응답
    func onLoginResult(_ result: LOGIN_MSG!) {
        print(result.rsltMsg.msg)
        resultLabel.text = result.rsltMsg.msg
        
        SetLoginStateText()
    }
    
~~~




