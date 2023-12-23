"use client";

import React, { FC } from "react";
import Box from "@mui/material/Box";
import {brown} from "@mui/material/colors";
import { Breadcrumbs, Button, Container, Divider, Link, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';
import AddIcon from '@mui/icons-material/Add';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import Image from 'next/image';


export default function RecipesPage() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Box >
        <Breadcrumbs
          sx={{
            mb: 2,
            '& .MuiBreadcrumbs-separator': {
              marginLeft: 0,
              marginRight: 0,
            },
          }}
          separator={<NavigateNextIcon sx={{width: '1rem', height: '1rem'}} color="secondary" />}
          aria-label="breadcrumb"
        >
          {["Recipes","Bread","Quick Bread", ""].map((item, i) => <Typography color="text.primary" key={i} letterSpacing={1.3} sx={{textTransform: 'uppercase', fontWeight: 700, fontSize: "0.8rem"}} variant="subtitle2">{item}</Typography>)}
        </Breadcrumbs>

        <Typography sx={{mb: 8, fontWeight: 500}} variant="h3">Whole-Gain Banana Bread</Typography>        

        <Typography>
          This one-bowl banana bread --- our <Link>2018 Recipe of the Year</Link> --- uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious --- it's versatile.
        </Typography>      

        <Box sx={{display: 'flex', my: 3}}>
          <AccessTimeIcon fontSize="large" sx={{mr: 1}}/>
          <Stats sx={{mr: 3}} title="Prep" value="10 mins"/>
          <Stats sx={{mr: 2}} title="Bake" value="1 hr to 1hr 15 mins"/>
          <Stats  title="Total" value="1 hr 10 mins"/>
        </Box>      

        <Divider/>

        <Box sx={{display: 'flex', mt: 2, justifyContent: 'space-between'}}>
          <Box display="flex">
            <GroupWorkOutlinedIcon fontSize="large" sx={{mr: 1}}/>
            <Stats title="Yield" value={<>1 loaf, 12 generous <br/> servings</>}/>
          </Box>
          <Box>
            <Button sx={{mr: 1}} variant="outlined" startIcon={<AddIcon />}>
              Save Recipe
            </Button>
            <Button variant="outlined" startIcon={<LocalPrintshopOutlinedIcon />}>
              Print
            </Button>
          </Box>
        </Box>    
      </Box>
      <Box sx={{ml: 4}}>
        <img
          src="/images/bread.jpg"
          alt="Bread"
        />
      </Box>
    </Box>
  )
}

const Stats: FC<{
  title: string, value: string | React.ReactNode
  sx?: object
}> = ({title, value, sx}) => {
  return (
    <Box sx={{...sx}}> 
      <Typography letterSpacing={1.3} fontWeight={700} textTransform="uppercase" fontSize="0.7rem">{title}</Typography>
      <Typography fontSize="1.1rem" fontWeight={500}>{value}</Typography>
    </Box>
  )
}
