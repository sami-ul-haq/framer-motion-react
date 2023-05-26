# Animation In React using Framer-motion


### initial => to initialize animation
### animate => to stop animation
### exit => to end animation

### Varients 

```

const hoverVarient = {
  init: {
    x: "-100vw",
  },
  mid: {
    x: 0,
  },
  hoverI: {
    scale: 1.1,
    transition: {
      yoyo: 10,
    },
  },
};

 <m.button
    variants={hoverVarient}
    initial="init"
    animate="mid"
    whileHover="hoverI"
 >

```
### Animatepresence => when components is removed from react tree

```
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}> ... </Routes>
    </AnimatePresence>

```

### whileHover => animation while hovering

```
transition: {
      yoyo: 10,
    },
```


### [Click her to see demo](https://framer-motion-practice.netlify.app/)
