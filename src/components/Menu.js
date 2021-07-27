import React, { Component } from "react";
import burger from "../images/burger.svg";
import menu from "../images/menu.png";

const menuData = [
  {
    itemName: "Home",
    href: "#home",
  },
  {
    itemName: "Sobre mí",
    href: "#presentation",
  },
  {
    itemName: "Herramientas",
    href: "#skills",
  },
  {
    itemName: "Proyectos",
    href: "#projects",
  },
  {
    itemName: "Contacto",
    href: "#contact",
  },
];

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: true,
      openList: true,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() {
    this.setState({
      openMenu: !this.state.openMenu,
      openList: !this.state.openList,
    });
  }

  render() {
    return (
      <header id="top" className="headerBackground">
        <nav className="menuBar">
          <div className={this.state.openMenu ? "containerMenu" : "hidden"}>
            <ul className={this.state.openList ? "listMenu" : "hiddenList"}>
              {menuData.map((item, index) => {
                return (
                  <li key={index}>
                    <a className="linkMenu fontItemMenu" href={item.href}>
                      {item.itemName}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <img
            alt="menu"
            src={menu}
            className="buttonHamburger"
            href="#"
            onClick={this.handleMenu}
          />
          {/* <div
            className="buttonHamburger"
            href="#"
            onClick={this.handleMenu}
          ></div> */}
        </nav>
      </header>
    );
  }
}
export default Menu;
