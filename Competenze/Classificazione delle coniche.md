---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["classification of conics", "conica", "conic section", "coniche", "ellisse", "iperbole", "parabola", "conica degenere", "conica centrica", "matrice associata a una conica", "invarianti di una conica"]
tags: [competenza, area/algebra-geometria]
---

# Classificazione delle coniche

> Riconoscere una conica $f(x,y)=0$ dalle sue due matrici: il rango e il determinante della matrice completa $B$ dicono se è degenere, il determinante del blocco quadratico $A$ se è ellisse, iperbole o parabola.

## Definizione / enunciato
Una **conica** è il luogo dei punti del piano che risolvono un'equazione polinomiale di secondo grado:
$$f(x,y)=a_{11}x^2+2a_{12}xy+a_{22}y^2+2b_1x+2b_2y+c=[x\ y\ 1]\,B\,[x\ y\ 1]^T=0,$$
$$B=\begin{bmatrix}a_{11}&a_{12}&b_1\\a_{12}&a_{22}&b_2\\b_1&b_2&c\end{bmatrix},\qquad A=\begin{bmatrix}a_{11}&a_{12}\\a_{12}&a_{22}\end{bmatrix}\ (\text{blocco dei termini quadratici}).$$
$B$ e $A$ sono definite a meno di una costante moltiplicativa.

**Primo criterio, rango di $B$:**
- $\mathrm{rank}B=3$ ($|B|\neq0$): **non degenere** (ellisse reale o immaginaria, iperbole, parabola);
- $\mathrm{rank}B=2$: semplicemente degenere, coppia di rette distinte (incidenti o parallele, reali o immaginarie);
- $\mathrm{rank}B=1$: doppiamente degenere, coppia di rette coincidenti (sempre reali).

**Secondo criterio, determinante di $A$:**
- $|A|\neq0$: **centrica**. Se $|A|<0$ tipo iperbolico (iperbole o rette incidenti reali); se $|A|>0$ tipo ellittico (ellisse o rette incidenti immaginarie).
- $|A|=0$: **non centrica** (parabola, rette parallele o coincidenti).

**Test ellisse reale/immaginaria:** $\mathrm{tr}A\cdot|B|<0$ dà un'ellisse reale; $\mathrm{tr}A\cdot|B|>0$ un'ellisse immaginaria.

## Formule chiave
$$|B|\neq0\ \&\ |A|>0:\ \text{ellisse};\quad |B|\neq0\ \&\ |A|<0:\ \text{iperbole};\quad |B|\neq0\ \&\ |A|=0:\ \text{parabola}$$
Forme canoniche: $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ (con $a^2=b^2+c^2$, eccentricità $e=c/a$), $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ (asintoti $y=\pm\frac bax$), $y=\alpha x^2$.

## Intuizione
$A$ è la forma quadratica della conica: il segno dei suoi autovalori (concordi, discordi, uno nullo) dice "da lontano" che forma ha la curva. $B$ aggiunge la parte lineare e dice se la curva si spezza in rette. Se $B$ è a blocchi (niente termini lineari), gli autovalori di $A$ sono due dei tre autovalori di $B$, e il terzo è $c$.

## Come si usa
Esempi da p. 22-31 di `14. Analytic Geometry II v3.2.0.pdf`:
- $x^2+xy-y^2+4y=9$: $B=\begin{bmatrix}1&1/2&0\\1/2&-1&2\\0&2&-9\end{bmatrix}$, $A=\begin{bmatrix}1&1/2\\1/2&-1\end{bmatrix}$ (p. 22, pagina controllata sull'immagine).
- $x^2+6xy+y^2+2x+2y+1=0$: $|A|=-8$, $|B|=-4$, iperbole.
- $x^2-4xy+4y^2-2x=1$: $|A|=0$, $|B|=-4$, parabola.
- $x^2-2xy+2y^2=-1$: $|A|=1$, $|B|=1$, $\mathrm{tr}A\cdot|B|=3>0$, ellisse immaginaria.
- $x^2-4xy+4y^2=0$: $|B|=0$, $\mathrm{rank}B=1$, rette coincidenti $x-2y=0$.
- Quiz con parametro $x^2+2xy+hy^2=2x$: $|A|=h-1$, $|B|=-h$. Iperbole per $h<1$, $h\neq0$; parabola solo per $h=1$.

## Nei corsi
- **Algebra lineare** (triennale): geometria analitica parte II (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/14. Analytic Geometry II v3.2.0.pdf` (p. 2-32); `Appunti, riassunti e formulari/coniche.pdf` (esercizi, R. Notari); esercizi `Esercizi ed esercitazioni/Es13 - coniche_ris.pdf`.

## Prerequisiti
- [[Forma quadratica]]: il blocco dei termini quadratici è una forma quadratica
- [[Determinante]]: i criteri usano |A| e |B|
- [[Rango di una matrice]]: rank B distingue i casi degeneri

## Porta a
- [[Riduzione a forma canonica di una conica]]: dopo il riconoscimento si cerca la rototraslazione
- [[Classificazione delle quadriche]]: stessa teoria in tre variabili

## Collegati
- [[Segnatura di una forma quadratica]]: q = −1, 0, 1 dà iperboli, ellissi o rette a seconda del segno di q
