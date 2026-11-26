---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["Newton's method", "metodo delle tangenti", "Newton-Raphson", "metodo di Newton-Raphson", "tangent method", "radici multiple"]
tags: [competenza, area/numerica]
---

# Metodo di Newton

> Metodo iterativo per $f(x)=0$ che sostituisce $f$ con la sua retta tangente in $x_n$ e ne prende lo zero: converge quadraticamente vicino a una radice semplice.

## Definizione / enunciato
Dal sistema $y=f(x_n)+f'(x_n)(x-x_n)$, $y=0$:
$$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)},\qquad n=0,1,2,\dots$$
**Convergenza locale.** Se le iterate stanno in $[a,b]$, $f\in C^2([a,b])$, $\alpha$ radice semplice e $|\alpha-x_0|$ piccolo, allora $x_n\to\alpha$ con ordine $p=2$; se $f'(\alpha)=0$ (radice multipla) l'ordine scende a $p=1$.

**Convergenza globale.** Se $f\in C^2([a,b])$ e
1. $f(a)f(b)<0$;
2. $f'(x)\ne0$ per ogni $x\in[a,b]$;
3. $f''\ge0$ oppure $f''\le0$ su tutto $[a,b]$;
4. $\left|\frac{f(a)}{f'(a)}\right|<b-a$ e $\left|\frac{f(b)}{f'(b)}\right|<b-a$,

allora Newton converge all'unica radice in $[a,b]$ per ogni $x_0\in[a,b]$.

## Formule chiave
Radici multiple di molteplicità $\mu$ nota: $x_{n+1}=x_n-\mu\frac{f(x_n)}{f'(x_n)}$ (ripristina $p=2$). Con $\mu$ ignota si applica Newton a $g=f/f'$, che ha le stesse radici ma semplici:
$$x_{n+1}=x_n-\frac{f(x_n)f'(x_n)}{[f'(x_n)]^2-f(x_n)f''(x_n)} .$$
È un punto fisso con $g(x)=x-f(x)/f'(x)$: se $\alpha$ è semplice $g'(\alpha)=0$, quindi $p\ge2$. Usando il Taylor di grado 2 si ottiene un metodo di ordine 3.

## Intuizione
Vicino ad $\alpha$ la funzione è quasi la sua tangente: l'errore del passo è il resto di Taylor $f''(\xi)(\alpha-x_n)^2/2$, cioè proporzionale al quadrato dell'errore precedente.

## Come si usa
Function del corso `tangenti(f,fd,x0,nmax,tol)` (richiede anche la derivata `fd`). Esempio: $x^4-4=0$, $x_0=1$: $x_1=1.75$, $x_2=1.499088921282799$, poi errori $6.94\cdot10^{-3}$, $5.07\cdot10^{-5}$, $2.72\cdot10^{-9}$, $0$ al passo 6. In Matlab `fzero(f,x0,tol)` per una equazione e `roots(c)` per i polinomi.

## Nei corsi
- **Metodi numerici** (triennale): "metodo delle tangenti o di Newton-Raphson". Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_04_sistemi_non_lineari_print.pdf` (p. 24-32, 37, 44, 48, 50-51); codice `triennale/ANNO 2/metodi numerici/tangenti.m`.

## Prerequisiti
- [[Derivata]]: serve $f'(x_n)$ a ogni passo
- [[Formula di Taylor con resto di Lagrange]]: costruzione e analisi dell'errore
- [[Ordine di convergenza di un metodo iterativo]]: ordine 2 su radici semplici

## Porta a
- [[Metodo di Newton per sistemi]]: stessa costruzione con la matrice jacobiana

## Collegati
- [[Metodo delle secanti]]: derivata sostituita dal rapporto incrementale
- [[Metodo del punto fisso]]: Newton è il punto fisso con $g=x-f/f'$
- [[Teorema degli zeri]]: la bisezione fornisce un buon $x_0$
- [[Funzione convessa]]: l'ipotesi 3 del teorema globale è convessità o concavità su $[a,b]$
