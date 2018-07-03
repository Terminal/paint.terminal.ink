# paint

24-bit colour to ANSI encoded paint program

![Terminal Paint](https://its-not-advertising-if-the-website-doesnt-exist-anymore.moustacheminer.com/1530659895.74.png)

Spits out text that can be `console.log()`ged by Node.js into compatible terminals.

Above image:
```js
console.log(`
                                                                  \x1b[48;2;255;255;255m \x1b[0m             
                                                                  \x1b[48;2;255;255;255m \x1b[0m             
             \x1b[48;2;255;255;255m \x1b[0m                              \x1b[48;2;255;255;255m \x1b[0m                     \x1b[48;2;255;255;255m \x1b[0m             
             \x1b[48;2;255;255;255m \x1b[0m                                                    \x1b[48;2;255;255;255m \x1b[0m             
            \x1b[48;2;255;255;255m \x1b[0m      \x1b[48;2;255;255;255m   \x1b[0m   \x1b[48;2;255;255;255m     \x1b[0m  \x1b[48;2;255;255;255m \x1b[0m \x1b[48;2;255;255;255m  \x1b[0m \x1b[48;2;255;255;255m   \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m    \x1b[48;2;255;255;255m      \x1b[0m    \x1b[48;2;255;255;255m   \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m             
            \x1b[48;2;255;255;255m    \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m \x1b[48;2;255;255;255m  \x1b[0m  \x1b[48;2;255;255;255m \x1b[0m      \x1b[48;2;255;255;255m \x1b[0m \x1b[48;2;255;255;255m \x1b[0m \x1b[48;2;255;255;255m  \x1b[0m  \x1b[48;2;255;255;255m \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m  \x1b[48;2;255;255;255m \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m             
           \x1b[48;2;255;255;255m  \x1b[0m     \x1b[48;2;255;255;255m    \x1b[0m   \x1b[48;2;255;255;255m  \x1b[0m     \x1b[48;2;255;255;255m  \x1b[0m  \x1b[48;2;255;255;255m  \x1b[0m  \x1b[48;2;255;255;255m \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m  \x1b[48;2;255;255;255m \x1b[0m   \x1b[48;2;255;255;255m  \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m             
            \x1b[48;2;255;255;255m \x1b[0m     \x1b[48;2;255;255;255m  \x1b[0m      \x1b[48;2;255;255;255m \x1b[0m      \x1b[48;2;255;255;255m \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m  \x1b[48;2;255;255;255m \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m  \x1b[48;2;255;255;255m      \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m             
             \x1b[48;2;255;255;255m    \x1b[0m   \x1b[48;2;255;255;255m   \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m      \x1b[48;2;255;255;255m \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m     \x1b[48;2;255;255;255m \x1b[0m       \x1b[48;2;255;255;255m \x1b[0m   \x1b[48;2;255;255;255m    \x1b[0m         
                                                                                
                                                                                
                                         \x1b[48;2;255;255;255m  \x1b[0m                  \x1b[48;2;255;255;255m \x1b[0m                  
                                                            \x1b[48;2;255;255;255m \x1b[0m                   
                  \x1b[48;2;255;255;255m \x1b[0m \x1b[48;2;255;255;255m    \x1b[0m      \x1b[48;2;255;255;255m    \x1b[0m      \x1b[48;2;255;255;255m \x1b[0m      \x1b[48;2;255;255;255m      \x1b[0m       \x1b[48;2;255;255;255m \x1b[0m \x1b[48;2;255;255;255m    \x1b[0m              
                  \x1b[48;2;255;255;255m  \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m      \x1b[48;2;255;255;255m \x1b[0m      \x1b[48;2;255;255;255m  \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m      \x1b[48;2;255;255;255m   \x1b[0m                  
                  \x1b[48;2;255;255;255m \x1b[0m     \x1b[48;2;255;255;255m \x1b[0m   \x1b[48;2;255;255;255m \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m     \x1b[48;2;255;255;255m \x1b[0m       \x1b[48;2;255;255;255m \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m      \x1b[48;2;255;255;255m \x1b[0m                    
                  \x1b[48;2;255;255;255m \x1b[0m \x1b[48;2;255;255;255m \x1b[0m \x1b[48;2;255;255;255m  \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m     \x1b[48;2;255;255;255m  \x1b[0m     \x1b[48;2;255;255;255m  \x1b[0m    \x1b[48;2;255;255;255m \x1b[0m       \x1b[48;2;255;255;255m \x1b[0m   \x1b[48;2;255;255;255m  \x1b[0m              
                 \x1b[48;2;255;255;255m     \x1b[0m       \x1b[48;2;255;255;255m    \x1b[0m \x1b[48;2;255;255;255m   \x1b[0m    \x1b[48;2;255;255;255m   \x1b[0m  \x1b[48;2;255;255;255m \x1b[0m     \x1b[48;2;255;255;255m   \x1b[0m     \x1b[48;2;255;255;255m    \x1b[0m                
                  \x1b[48;2;255;255;255m \x1b[0m                                                             
                  \x1b[48;2;255;255;255m \x1b[0m                                                             
                  \x1b[48;2;255;255;255m \x1b[0m                                                             
                  \x1b[48;2;255;255;255m \x1b[0m                                       
`)
```
