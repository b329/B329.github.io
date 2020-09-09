var store = [{
        "title": "안녕, 피츠버그 그리고 책",
        "excerpt":"안녕, 피츠버그 그리고 책 - 김용택 안녕, 아빠. 지금 나는 버스를 기다리고 있어. 마치 시 같다. 버스를 기다리고 서 있는 모습이 한그루의 나무 같다. 잔디와 나무가 있는 집들은 멀리 있고, 햇살과 바람과 하얀 낮달이 네 마음속을 지나는 소리가 들린다. 한그루의 나무가 세상에 서 있기까지 얼마나 많은 것들을 잃고 또 잊어야...","categories": ["poet"],
        "tags": ["poem"],
        "url": "http://localhost:4000/literature/hello_pittsburgh/",
        "teaser": null
      },{
        "title": "뒤처진 새",
        "excerpt":"뒤처진 새 - Reiner Kunze   ​   철새 떼가,남쪽에서   날아오며   도나우강을 건널 때면, 나는 기다린다   뒤쳐진 새를   ​   그게 어떤 건지, 내가 안다   남들과 발 맞출 수 없다는 것   ​   어릴 적부터 내가 안다   ​   뒤쳐진 새가 머리 위로 날아 떠나면   나는 그에게 내 힘을 보낸다  ","categories": ["poet"],
        "tags": ["poem"],
        "url": "http://localhost:4000/literature/reiner_kunze/",
        "teaser": null
      },{
        "title": "@Autowired 가 없는 이유",
        "excerpt":"@Autowired 가 없는 이유는 빈을 주입받는 방식에 @Autowired setter 생성자 주입방식이 있는데 여기서는 Controller 와 Service 에서 lombok 의 @RequiredArgsConstructor 로 생성자 Bean 을 주입받기 때문에 Autowired 가 없다. 생성자를 직접 안쓰고 lombok 을 사용하는 이점은 해당 클래스의 의존성 관계가 변경될때마다 생성자코드를 계속해서 수정해야 하는 번거로움을 피하기 위해서이다. @RequiredArgsConstructor @Service...","categories": ["springboot"],
        "tags": ["springboot"],
        "url": "http://localhost:4000/portfolio/2020-08-23-autowired/",
        "teaser": null
      },{
        "title": "@Autowired 가 없는 이유",
        "excerpt":"@Autowired 가 없는 이유는 빈을 주입받는 방식에 @Autowired setter 생성자 주입방식이 있는데 여기서는 Controller 와 Service 에서 lombok 의 @RequiredArgsConstructor 로 생성자 Bean 을 주입받기 때문에 Autowired 가 없다. 생성자를 직접 안쓰고 lombok 을 사용하는 이점은 해당 클래스의 의존성 관계가 변경될때마다 생성자코드를 계속해서 수정해야 하는 번거로움을 피하기 위해서이다. @RequiredArgsConstructor @Service...","categories": ["springboot"],
        "tags": ["springboot"],
        "url": "http://localhost:4000/portfolio/portfolio/",
        "teaser": null
      },{
        "title": "springboot-2.2 Init 세팅에 대한 기록",
        "excerpt":"기본 springframework 을 만들면서 기록을 함께 해두기 위해 작성되었음. 아래 소스 링크를 참조하면 기본적으로 제작한 springboot 2.2.0 을 기반으로 작성한 소스코드를 내려받고 실행해볼 수 있습니다.      branch 에 대한 설명   develop_1 : 기본 framework 까지   develop_2 : mustache 를 이용한 화면 구성까지   관련소스 참조: B329’s GitHub repo.   ","categories": ["springboot"],
        "tags": ["springboot"],
        "url": "http://localhost:4000/portfolio/2020-08-22-post/",
        "teaser": null
      },{
        "title": "Kafka 개요",
        "excerpt":"Apache Kafka(아파치 카프카)는 LinkedIn에서 개발된 분산 메시징 시스템으로써 2011년에 오픈소스로 공개되었다. 대용량의 실시간 로그처리에 특화된 아키텍처 설계를 통하여 기존 메시징 시스템보다 우수한 TPS를 보여주고 있다. INTRODUCTION APACHE KAFKA ™는 분산 형 스트리밍 플랫폼 입니다. 그게 정확히 무슨 뜻입니까? 우리는 스트리밍 플랫폼이 세 가지 핵심 기능을 가지고 있다고 생각합니다. 이를 통해...","categories": ["kafka"],
        "tags": ["kafka"],
        "url": "http://localhost:4000/portfolio/2020-08-23-kafka/",
        "teaser": null
      },{
        "title": "[Kafka]카프카의 특징-1",
        "excerpt":"이 글은 카프카, 데이터 플랫폼의 최강자 고승범/공용준 님의 책을 공부하며 정리하는 글입니다. INTRODUCTION APACHE KAFKA ™는 분산 형 스트리밍 플랫폼 입니다. 그게 정확히 무슨 뜻입니까? 우리는 스트리밍 플랫폼이 세 가지 핵심 기능을 가지고 있다고 생각합니다. 이를 통해 레코드 스트림을 게시하고 구독 할 수 있습니다. 이 점에서 메시지 큐 또는 엔터프라이즈...","categories": ["kafka"],
        "tags": ["kafka"],
        "url": "http://localhost:4000/portfolio/2020-08-23-kafka_1/",
        "teaser": null
      },{
        "title": "[Kafka]카프카 설치 - #1",
        "excerpt":"Kafka 의 간단한 producer 와 consumer 의 작동 테스트 on mac -Kafka cluster 설치 brew install wget wget http://apache.mirror.cdnetworks.com/kafka/2.6.0/kafka_2.13-2.6.0.tgz tar -zxvf kafka_2.13-2.6.0.tgz cd kafka_2.13-2.6.0 -주키퍼 실행 cd bin ./zookeeper-server-start.sh ../config/zookeeper.properties &amp; -카프카 브로커 실행 ./kafka-server-start.sh ../config/server.properties &amp; 하나의 zookeeper 에 여러대의 kafka cluster 를 실행하고 싶을때 vi server.properties 파일을 열면...","categories": ["kafka"],
        "tags": ["kafka"],
        "url": "http://localhost:4000/portfolio/2020-08-24-kafka_do_1/",
        "teaser": null
      },{
        "title": "[Kafka]카프카 메세지 producer 과 consumer - #2",
        "excerpt":"-Producer 메세지 생산하기 $ bin/kafka-console-producer.sh --broker-list 127.0.0.1:9092, 127.0.0.1:9093, 127.0.0.1:9094 --topic PayLog &gt;login buyer &gt;searching product &gt;finding Tods &gt;pay price &gt;completed buying &gt;logout &gt; -Consumer 메세지 소비하기 $ bin/kafka-console-consumer.sh --bootstrap-server 127.0.0.1:9092, 127.0.0.1:9093, 127.0.0.1:9094 --topic PayLog --from-beginning b329-MacBookPro:kafka_2.13-2.6.0 b329$ bin/kafka-console-consumer.sh --bootstrap-server 127.0.0.1:9092, 127.0.0.1:9093, 127.0.0.1:9094 --topic PayLog --from-beginning login buyer searching product finding...","categories": ["kafka"],
        "tags": ["kafka"],
        "url": "http://localhost:4000/portfolio/2020-08-24-kafka_do_2/",
        "teaser": null
      },{
        "title": "Agile & Scrum 에 대한 정리",
        "excerpt":"-왜 기민한(agile) 조직이 되야 하는가? 기업간 경쟁이 치열해지는 상황에서 언제 나타날지 모르는 잠재적 경쟁자들과 싸워야 하며, 달라지는 고객 및 조직원들의 요구에도 기민하게 반응해야 살아남을 수 있는 환경이 되었다. 숨겨져 있던 고객의 니즈를 발굴하여 짧은 시간 안에 글로벌 기업으로 자리잡은 예) 페이스북, 우버, 에어이앤비 전문가들은 위계적인 구조에서 리더가 지시, 통제하는 기존의...","categories": ["scrum"],
        "tags": ["scrum"],
        "url": "http://localhost:4000/portfolio/2020-09-08-scrum/",
        "teaser": null
      },{
        "title": "@Autowired 가 없는 이유",
        "excerpt":"@Autowired 가 없는 이유는 빈을 주입받는 방식에 @Autowired setter 생성자 주입방식이 있는데 여기서는 Controller 와 Service 에서 lombok 의 @RequiredArgsConstructor 로 생성자 Bean 을 주입받기 때문에 Autowired 가 없다. 생성자를 직접 안쓰고 lombok 을 사용하는 이점은 해당 클래스의 의존성 관계가 변경될때마다 생성자코드를 계속해서 수정해야 하는 번거로움을 피하기 위해서이다. @RequiredArgsConstructor @Service...","categories": ["springboot"],
        "tags": ["springboot"],
        "url": "http://localhost:4000/springboot/autowired/",
        "teaser": null
      },{
        "title": "springboot-2.2 Init 세팅에 대한 기록",
        "excerpt":"기본 springframework 을 만들면서 기록을 함께 해두기 위해 작성되었음. 아래 소스 링크를 참조하면 기본적으로 제작한 springboot 2.2.0 을 기반으로 작성한 소스코드를 내려받고 실행해볼 수 있습니다.      branch 에 대한 설명   develop_1 : 기본 framework 까지   develop_2 : mustache 를 이용한 화면 구성까지   관련소스 참조: B329’s GitHub repo.   ","categories": ["springboot"],
        "tags": ["springboot"],
        "url": "http://localhost:4000/springboot/post/",
        "teaser": null
      },{
        "title": "Kafka 개요",
        "excerpt":"Apache Kafka(아파치 카프카)는 LinkedIn에서 개발된 분산 메시징 시스템으로써 2011년에 오픈소스로 공개되었다. 대용량의 실시간 로그처리에 특화된 아키텍처 설계를 통하여 기존 메시징 시스템보다 우수한 TPS를 보여주고 있다. INTRODUCTION APACHE KAFKA ™는 분산 형 스트리밍 플랫폼 입니다. 그게 정확히 무슨 뜻입니까? 우리는 스트리밍 플랫폼이 세 가지 핵심 기능을 가지고 있다고 생각합니다. 이를 통해...","categories": ["kafka"],
        "tags": ["kafka"],
        "url": "http://localhost:4000/kafka/kafka/",
        "teaser": null
      },{
        "title": "[Kafka]카프카의 특징-1",
        "excerpt":"이 글은 카프카, 데이터 플랫폼의 최강자 고승범/공용준 님의 책을 공부하며 정리하는 글입니다. INTRODUCTION APACHE KAFKA ™는 분산 형 스트리밍 플랫폼 입니다. 그게 정확히 무슨 뜻입니까? 우리는 스트리밍 플랫폼이 세 가지 핵심 기능을 가지고 있다고 생각합니다. 이를 통해 레코드 스트림을 게시하고 구독 할 수 있습니다. 이 점에서 메시지 큐 또는 엔터프라이즈...","categories": ["kafka"],
        "tags": ["kafka"],
        "url": "http://localhost:4000/kafka/kafka_1/",
        "teaser": null
      },{
        "title": "[Kafka]카프카 설치 - #1",
        "excerpt":"Kafka 의 간단한 producer 와 consumer 의 작동 테스트 on mac -Kafka cluster 설치 brew install wget wget http://apache.mirror.cdnetworks.com/kafka/2.6.0/kafka_2.13-2.6.0.tgz tar -zxvf kafka_2.13-2.6.0.tgz cd kafka_2.13-2.6.0 -주키퍼 실행 cd bin ./zookeeper-server-start.sh ../config/zookeeper.properties &amp; -주키퍼 실행 cd bin ./zookeeper-server-start.sh ../config/zookeeper.properties &amp; -카프카 브로커 실행 ./kafka-server-start.sh ../config/server.properties &amp; 하나의 zookeeper 에 여러대의 kafka cluster...","categories": ["kafka"],
        "tags": ["kafka"],
        "url": "http://localhost:4000/kafka/kafka_do_1/",
        "teaser": null
      },{
        "title": "[Kafka]카프카 메세지 producer 과 consumer - #2",
        "excerpt":"-Producer 메세지 생산하기 $ bin/kafka-console-producer.sh --broker-list 127.0.0.1:9092, 127.0.0.1:9093, 127.0.0.1:9094 --topic PayLog &gt;login buyer &gt;searching product &gt;finding Tods &gt;pay price &gt;completed buying &gt;logout &gt; -Consumer 메세지 소비하기 $ bin/kafka-console-consumer.sh --bootstrap-server 127.0.0.1:9092, 127.0.0.1:9093, 127.0.0.1:9094 --topic PayLog --from-beginning b329-MacBookPro:kafka_2.13-2.6.0 b329$ bin/kafka-console-consumer.sh --bootstrap-server 127.0.0.1:9092, 127.0.0.1:9093, 127.0.0.1:9094 --topic PayLog --from-beginning login buyer searching product finding...","categories": ["kafka"],
        "tags": ["kafka"],
        "url": "http://localhost:4000/kafka/kafka_do_2/",
        "teaser": null
      },{
        "title": "Agile & Scrum 에 대한 정리",
        "excerpt":"-왜 기민한(agile) 조직이 되야 하는가? 기업간 경쟁이 치열해지는 상황에서 언제 나타날지 모르는 잠재적 경쟁자들과 싸워야 하며, 달라지는 고객 및 조직원들의 요구에도 기민하게 반응해야 살아남을 수 있는 환경이 되었다. 숨겨져 있던 고객의 니즈를 발굴하여 짧은 시간 안에 글로벌 기업으로 자리잡은 예) 페이스북, 우버, 에어이앤비 전문가들은 위계적인 구조에서 리더가 지시, 통제하는 기존의...","categories": ["scrum"],
        "tags": ["scrum"],
        "url": "http://localhost:4000/scrum/scrum/",
        "teaser": null
      }]
