---
title: "제네릭 프로그래밍"
date: 2020-09-25 20:32:28 -0400
categories: algorithm
tags: [algorithm]
---

**제네릭 프로그래밍**

제네릭(generic)이란 파라미터의 타입이 나중에 지정(to-be-specified-later)되게 헤서 재활용성을 높일 수 있는 프로그래밍 스타일로서,
1989년 데이비드 무저(David Musser)와 알렉산더 스테파노프(Alexander Stepanov)가 고안했다.
특히 알렉산더 스테파노프는 C++ STL 의 창안자로도 유명하다. 그렇다면 각 언어에서 제네릭 프로그래밍의 문법이 어떻게 되는지에 대해 살펴보자.

~~~

template<class T, class U>
bool are_equal(T a, U b) {
    return ( a == b );
}

are_equal(10, 10.0);

// C++ 은 템플릿이라는 기능을 통해 제네릭 프로그래밍을 구현할 수 있다.
~~~


~~~

public static<T, U> boolean are_equal(T a, U b) {
    return a==b;
}

are_equal(10, 10.0);

// JAVA 의 제네릭은 1.5 버전부터 추가되었다.
~~~

두 언어의 중요한 특징 중 하나로서 다양한 타입의 객체를 재사용할 수 있게 한다.



