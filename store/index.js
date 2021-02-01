import Vuex from "vuex";

function createStore() {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "title one",
                previewText: "this is a normal text",
                thumbnail:
                  "https://www.gettingsmart.com/wp-content/uploads/2016/08/Future-Technology-Feature-Image.jpg"
              },
              {
                id: "2",
                title: "title two",
                previewText: "this is a normal text",
                thumbnail:
                  "https://www.gettingsmart.com/wp-content/uploads/2016/08/Future-Technology-Feature-Image.jpg"
              }
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
}

export default createStore;
