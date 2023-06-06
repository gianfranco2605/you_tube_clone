import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import {Sidebar, Videos} from "./";


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  },[selectedCategory])
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md:'90.5vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff', marginRight: '15px' }}>Copyright 2023 Navas Media</Typography>
      </Box>

      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{ color: '#D8FF00' }} >
          New <span style={{ color: '#999797'}}>videos</span>
        </Typography>

        <Videos videos={[]}/>
      </Box>
    </Stack>
  )
}

export default Feed