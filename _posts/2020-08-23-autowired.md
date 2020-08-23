---
title: "@Autowired 가 없는 이유"
date: 2020-08-21 08:26:28 -0400
categories: springboot
tags: [springboot]
---

- @Autowired 가 없는 이유는 빈을 주입받는 방식에
@Autowired setter 생성자 주입방식이 있는데
여기서는 Controller 와 Service 에서 lombok 의 @RequiredArgsConstructor 로 생성자 Bean 을 주입받기 때문에
Autowired 가 없다.
생성자를 직접 안쓰고 lombok 을 사용하는 이점은 해당 클래스의 의존성 관계가 변경될때마다 생성자코드를 계속해서 수정해야 하는 번거로움을
피하기 위해서이다.

~~~java
@RequiredArgsConstructor
@Service
public class PostsService {
    private final PostsRepository postsRepository;
    @Transactional
    public Long save(PostsSaveRequestDto requestDto) {
        return postsRepository.save(requestDto.toEntity()).getId();
    }

    @Transactional
    public Long update(Long id, PostsUpdateRequestDto requestDto) {
        Posts posts = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id="+ id));

        posts.update(requestDto.getTitle(), requestDto.getContent());

                return id;
    }

    public PostsResponseDto findById(Long id) {
        Posts entity = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));
        return new PostsResponseDto(entity);
    }
}
~~~


관련소스 참조: [B329’s GitHub repo][jekyll-gh].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/b329/springboot2.git
[jekyll-talk]: https://talk.jekyllrb.com/