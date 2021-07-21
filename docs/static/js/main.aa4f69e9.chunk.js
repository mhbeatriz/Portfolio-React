(this.webpackJsonprickandmorty = this.webpackJsonprickandmorty || []).push([
  [0],
  {
    30: function (e, t, c) {},
    31: function (e, t, c) {
      "use strict";
      c.r(t);
      var a = c(1),
        s = c(15),
        r = c.n(s),
        n = c(10),
        i = c(2),
        l = function () {
          return fetch("https://rickandmortyapi.com/api/character")
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              var t = e.results.map(function (e) {
                return {
                  id: e.id,
                  name: e.name,
                  species: e.species,
                  image: e.image,
                  origin: e.origin.name,
                  status: e.status,
                  episode: e.episode.length,
                };
              });
              return console.log(t), t;
            });
        },
        o = {
          get: function (e, t) {
            var c = JSON.parse(localStorage.getItem(e));
            return null === c ? t : c;
          },
          set: function (e, t) {
            localStorage.setItem(e, JSON.stringify(t));
          },
        },
        j = c(7),
        d = c(0),
        m = function (e) {
          return Object(d.jsxs)("li", {
            children: [
              Object(d.jsx)(j.b, {
                to: "/character/".concat(e.character.id),
                children: Object(d.jsx)("img", {
                  classNameNameNameName: "image",
                  src: e.character.image,
                  alt: "Foto de ".concat(e.character.name),
                }),
              }),
              Object(d.jsxs)("section", {
                classNameNameNameName: "info-character",
                children: [
                  Object(d.jsx)("h3", {
                    classNameNameNameName: "name",
                    children: e.character.name,
                  }),
                  Object(d.jsx)("p", {
                    classNameNameNameName: "species",
                    children: e.character.species,
                  }),
                ],
              }),
            ],
          });
        },
        u = c(8),
        h = c.n(u),
        b = c.p + "static/media/notfound.9bbf6f89.png",
        f = function (e) {
          var t = e.characters.map(function (e) {
            return Object(d.jsx)(
              "li",
              {
                classNameNameNameName: "character-card",
                children: Object(d.jsx)(m, { character: e }),
              },
              e.id
            );
          });
          return Object(d.jsx)("section", {
            children:
              0 === e.characters.length
                ? Object(d.jsxs)("div", {
                    classNameNameNameName: "notfound",
                    children: [
                      Object(d.jsx)("p", {
                        classNameNameNameName: "tryagain",
                        children: "Prueba a escribir otro personaje",
                      }),
                      " ",
                      Object(d.jsx)("img", {
                        src: b,
                        classNameNameNameName: "img-notfound",
                      }),
                    ],
                  })
                : Object(d.jsx)("ul", {
                    classNameNameNameName: "list-characters",
                    children: t,
                  }),
          });
        },
        p = f;
      f.PropsTypes = { characters: h.a.array };
      var O = function (e) {
          return Object(d.jsx)(d.Fragment, {
            children: Object(d.jsx)("input", {
              classNameNameNameName: "inputname",
              type: "text",
              placeholder: "Filtrar por nombre",
              value: e.filterName,
              name: "name",
              id: "name",
              onChange: function (t) {
                e.handleFilter({ value: t.target.value, key: "name" });
              },
            }),
          });
        },
        x = function (e) {
          return Object(d.jsx)(d.Fragment, {
            children: Object(d.jsx)("input", {
              classNameNameNameName: "inputspecie",
              type: "text",
              placeholder: "Filtrar por especie",
              value: e.filterSpecies,
              name: "species",
              id: "species",
              onChange: function (t) {
                e.handleFilter({ value: t.target.value, key: "species" });
              },
            }),
          });
        },
        g = function (e) {
          return Object(d.jsx)("section", {
            classNameNameNameName: "form-container",
            children: Object(d.jsxs)("form", {
              onSubmit: function (e) {
                e.preventDefault();
              },
              classNameNameNameName: "form",
              children: [
                Object(d.jsx)(O, {
                  handleFilter: e.handleFilter,
                  filterName: e.filterName,
                }),
                Object(d.jsx)(x, {
                  handleFilter: e.handleFilter,
                  filterSpecies: e.filterSpecies,
                }),
              ],
            }),
          });
        },
        N = c.p + "static/media/RickandMorty.de13d484.png",
        v = c.p + "static/media/song.d67d6eb6.mp3",
        y = function () {
          return Object(d.jsxs)("div", {
            classNameNameNameName: "header",
            children: [
              Object(d.jsxs)("audio", {
                id: "song",
                type: "audio/mp3",
                controls: !0,
                autoPlay: !0,
                classNameNameNameName: "song",
                children: [" ", Object(d.jsx)("source", { src: v })],
              }),
              Object(d.jsx)("img", {
                classNameNameNameName: "header-logo",
                src: N,
              }),
            ],
          });
        },
        S = c.p + "static/media/arrow.2054374e.png",
        k = function (e) {
          return Object(d.jsxs)("div", {
            classNameNameNameName: "containerdetail",
            children: [
              Object(d.jsx)(y, {}),
              Object(d.jsx)(j.b, {
                to: "/",
                classNameNameNameName: "go-back",
                children: Object(d.jsx)("img", {
                  src: S,
                  classNameNameNameName: "go-back-image",
                }),
              }),
              Object(d.jsxs)("div", {
                classNameNameNameName: "detail",
                children: [
                  Object(d.jsx)("section", {
                    children: Object(d.jsx)("img", {
                      classNameNameNameName: "image-detail",
                      src: e.character.image,
                      alt: e.character.name,
                    }),
                  }),
                  Object(d.jsxs)("section", {
                    classNameNameNameName: "info",
                    children: [
                      Object(d.jsx)("h1", {
                        classNameNameNameName: "name-detail",
                        children: e.character.name,
                      }),
                      Object(d.jsxs)("ul", {
                        classNameNameNameName: "info-detail",
                        children: [
                          Object(d.jsxs)("li", {
                            classNameNameNameName: "detail-list",
                            children: ["Status: ", e.character.status],
                          }),
                          Object(d.jsxs)("li", {
                            classNameNameNameName: "detail-list",
                            children: ["Specie: ", e.character.species],
                          }),
                          Object(d.jsxs)("li", {
                            classNameNameNameName: "detail-list",
                            children: ["Origin: ", e.character.origin],
                          }),
                          Object(d.jsxs)("li", {
                            classNameNameNameName: "detail-list",
                            children: ["Episode: ", e.character.episode],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        F = c.p + "static/media/rick.fb915d6f.png",
        w = function () {
          return Object(d.jsxs)("div", {
            classNameNameNameName: "footer",
            children: [
              Object(d.jsx)("span", {
                classNameNameNameName: "copy",
                children: " \xa9 BeatrizMendoza",
              }),
              Object(d.jsx)("img", {
                src: F,
                classNameNameNameName: "logofooter",
              }),
            ],
          });
        },
        C =
          (c(30),
          function () {
            return Object(d.jsxs)("section", {
              classNameNameNameName: "notfound",
              children: [
                Object(d.jsx)("img", {
                  src: b,
                  classNameNameNameName: "img-notfound",
                }),
                Object(d.jsx)("p", {
                  classNameNameNameName: "tryagain",
                  children: "Lo siento este personaje no existe",
                }),
              ],
            });
          }),
        I = function () {
          var e = Object(a.useState)(o.get("character", [])),
            t = Object(n.a)(e, 2),
            c = t[0],
            s = t[1],
            r = Object(a.useState)(o.get("filterName", "")),
            j = Object(n.a)(r, 2),
            m = j[0],
            u = j[1],
            h = Object(a.useState)(o.get("filterSpecies", "")),
            b = Object(n.a)(h, 2),
            f = b[0],
            O = b[1];
          Object(a.useEffect)(function () {
            0 === c.length &&
              l().then(function (e) {
                e.sort(function (e, t) {
                  return e.name > t.name ? 1 : e.name < t.name ? -1 : 0;
                });
                s(e);
              });
          }, []),
            Object(a.useEffect)(
              function () {
                o.set("characters", c),
                  o.set("filterName", m),
                  o.set("filterSpecies", f);
              },
              [m, f, c]
            );
          var x = c
            .filter(function (e) {
              return e.name.toLowerCase().includes(m.toLowerCase());
            })
            .filter(function (e) {
              return (
                "" === f || e.species.toLowerCase().includes(f.toLowerCase())
              );
            });
          return Object(d.jsx)(i.c, {
            children: Object(d.jsxs)("div", {
              classNameNameNameName: "container",
              children: [
                Object(d.jsxs)(i.a, {
                  exact: !0,
                  path: "/",
                  children: [
                    Object(d.jsx)(y, {}),
                    Object(d.jsx)(g, {
                      handleFilter: function (e) {
                        return "name" === e.key
                          ? u(e.value)
                          : "species" === e.key
                          ? O(e.value)
                          : void 0;
                      },
                      filterName: m,
                      filterSpecies: f,
                    }),
                    Object(d.jsx)(p, { characters: x }),
                  ],
                }),
                Object(d.jsx)(i.a, {
                  path: "/character/:characterId",
                  render: function (e) {
                    var t = e.match.params.characterId,
                      a = c.find(function (e) {
                        return e.id === parseInt(t);
                      });
                    return (
                      console.log(a),
                      void 0 !== a
                        ? Object(d.jsx)(k, { character: a })
                        : Object(d.jsx)(C, {})
                    );
                  },
                }),
                Object(d.jsx)(w, {}),
              ],
            }),
          });
        };
      r.a.render(
        Object(d.jsx)(j.a, { children: Object(d.jsx)(I, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[31, 1, 2]],
]);
//# sourceMappingURL=main.aa4f69e9.chunk.js.map
