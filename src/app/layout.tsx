"use client"

import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import brown from '@mui/material/colors/brown';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import * as React from 'react';


const LINKS = [
  { text: 'Shop', href: '/' },
  { text: 'Recipes', href: '/recipes' },
  { text: 'Learn', href: '/learn' },
  { text: 'About', href: '/about' },
  { text: 'Blog', href: '/blog' },
];

const RECIPES_LINKS = [
  { text: 'Categories', href: '/categories'},
  { text: 'Collections', href: '/collections'},
  { text: 'Resources', href: '/resources'},
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentRoute = usePathname();
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000, boxShadow: 'none', backgroundColor: 'background.paper' }}>
            <Container maxWidth="lg">
              <Toolbar sx={{position: 'relative'}} disableGutters>
                <Box sx={{position: 'absolute', top: 1}}>
                  <Image
                    src="/images/logo.png"
                    width={100}
                    height={100}
                    alt="Logo"
                  />
                </Box>

                <Box sx={{
                  flexGrow: 1,
                  display: 'flex',
                  ml: 15
                }}>
                  {LINKS.map((link) => (
                    <Link
                      key={link.text}
                      sx={{textTransform: 'uppercase', mr: 6, fontWeight: 500, borderBottom: currentRoute === link.href ? 2 : 0, borderColor: 'secondary.main'}}
                      underline="none"
                      href={link.href}
                      variant='subtitle1'
                    >
                      {link.text}
                    </Link>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>

          {currentRoute.includes("recipes") && (
            <Box sx={{bgcolor: brown[50], mt: ['48px', '56px', '64px'],}}>
              <Container maxWidth="lg">
                  <Box sx={{display: 'flex', py: 2, ml: 15}}>
                    {RECIPES_LINKS.map((link, i) => (
                      <Typography key={i} sx={{textTransform: 'uppercase', mr: 4}} variant="subtitle2">{link.text}</Typography>
                    ))}
                  </Box>
              </Container>
            </Box>
          )}

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              mt: currentRoute.includes("recipes") ? 8 : 15,
            }}
          >
            <Container maxWidth="lg">
              {children}
            </Container>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
