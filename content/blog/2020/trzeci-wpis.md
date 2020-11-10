---
title: Zarządzanie stanami przy pomocy Vuex'a
date: 2020-11-11
categories: [frontend]
tags: [vue, vuex]
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ultricies elit, ut fringilla libero. Maecenas iaculis pulvinar risus sed sollicitudin. 
---

### Czym jest Vuex
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ultricies elit, ut fringilla libero. Maecenas iaculis pulvinar risus sed sollicitudin. Pellentesque vel scelerisque velit. Sed rutrum, dui id accumsan sagittis, libero mauris condimentum nulla, non laoreet erat eros ac neque. In luctus faucibus porttitor. Vestibulum nec urna mauris. Cras sed elit risus. Morbi turpis ipsum, iaculis eu gravida sed, fermentum at nibh.

### Jak korzystac z Vuex'a
Nunc aliquam, nunc in iaculis placerat, mi neque aliquam tellus, vel condimentum nulla arcu ac arcu. Ut sed commodo justo. Phasellus rhoncus ipsum nec porttitor porttitor. Aenean enim nisi, convallis non quam at, tristique porttitor risus. 
```javascript
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
```
Cras sagittis felis sed interdum sagittis. Nulla sit amet libero ut dui ullamcorper pretium sit amet vitae ex. Proin scelerisque rutrum nunc, sed eleifend orci. Ut aliquam suscipit consequat. Fusce vitae vestibulum nibh, a tempor ante. Nam nec condimentum diam. Mauris blandit augue vel nisl hendrerit, ut cursus ante facilisis. Vestibulum sed nulla malesuada, gravida magna in, semper justo. Proin semper interdum fermentum.

### Wzorce projektowe
Etiam varius ligula nisi, id luctus magna euismod a. Maecenas hendrerit quam a libero fermentum, varius gravida felis tempor. Integer eros ante, aliquam eu nunc non, pellentesque dignissim diam. Sed viverra finibus odio, non euismod erat pellentesque id. Etiam molestie eget ex et accumsan. Praesent in nunc a arcu porttitor pharetra a a neque. Nulla facilisi. Cras scelerisque malesuada lacus. Curabitur quis lectus nec arcu vulputate eleifend. Curabitur a lectus risus.

### Konkluzja
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce fringilla sapien a mauris molestie malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras tristique imperdiet tortor, et facilisis ligula porta id. Integer dapibus libero ante, id dictum est fringilla eu. Proin nec nulla et est commodo feugiat. Nam ligula est, feugiat eu libero at, malesuada fringilla ante. Aliquam maximus tortor vitae varius facilisis. Praesent egestas metus ut consectetur ultrices. Sed sed dictum ligula, vel bibendum leo. Praesent sit amet sagittis ipsum. Quisque vitae auctor urna, sed tincidunt dui. Phasellus non viverra enim, vel faucibus diam. Curabitur vitae mauris sit amet libero sodales consequat.