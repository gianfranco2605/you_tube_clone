import { Stack } from "@mui/material";

import { categories } from '../utils/constans';


const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
        {categories.map((category) => (
            <button
               className="category-btn"
               onClick={() => setSelectedCategory(category.name)}
               style={{
                background: category.name === selectedCategory && '#D8FF00',
                color: '#999797',
               }}
               key={category.name}
            >
                <span style={{ color: category.name === selectedCategory ?  '#999797' : '#D8FF00'}}>{category.icon}</span>
                <span style={{ opacity: categories.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
            </button>
        ))}
    </Stack>
  )


export default Sidebar