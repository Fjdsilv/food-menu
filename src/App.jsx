import { useState } from "react";
import Title from "./components/Title";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import menu from "./data";

const allcategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allcategories);

  const filterItems = (category) => {
    console.log(category)

    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const selectedCategory = menu.filter((item) => item.category === category)
    setMenuItems(selectedCategory);
  }

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu"/>
        <Categories 
          categories={categories} 
          filterItems={filterItems}
        />
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}
export default App