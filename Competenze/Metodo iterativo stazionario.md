---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["stationary iterative method", "metodi iterativi per sistemi lineari", "matrix splitting", "sdoppiamento di A", "matrice di iterazione", "iteration matrix", "convergenza dei metodi iterativi"]
tags: [competenza, area/numerica]
---

# Metodo iterativo stazionario

> Schema generale $D\mathbf x^{(k)}=-C\mathbf x^{(k-1)}+\mathbf b$ per risolvere $A\mathbf x=\mathbf b$ con lo sdoppiamento $A=D+C$: converge per ogni vettore iniziale se e solo se il raggio spettrale della matrice di iterazione è minore di 1.

## Definizione / enunciato
Con $a_{ii}\ne0$ (ottenibile con scambi di equazioni), da un $\mathbf x^{(0)}$ arbitrario si costruisce $\{\mathbf x^{(k)}\}$ con $\lim(\mathbf x^*-\mathbf x^{(k)})=\mathbf o$. Si scrive
$$A\mathbf x=\mathbf b\iff(D+C)\mathbf x=\mathbf b\ \Longrightarrow\ D\mathbf x^{(k)}=-C\mathbf x^{(k-1)}+\mathbf b .$$
$D$ deve essere: (1) non singolare; (2) di forma semplice (diagonale, triangolare), così ogni passo costa poco; (3) tale da garantire la convergenza.

**Teorema.** Con $\mathbf e^{(k)}=\mathbf x^*-\mathbf x^{(k)}$ si ha $\mathbf e^{(k)}=B\mathbf e^{(k-1)}=B^k\mathbf e^{(0)}$, dove
$$B:=-D^{-1}C=I-D^{-1}A$$
è la **matrice di iterazione**. Poiché $B^k\to O\iff\rho(B)<1$:
$$\lim_{k\to\infty}\mathbf e^{(k)}=\mathbf o\ \ \forall\mathbf x^{(0)}\iff\rho(B)<1,\qquad\rho(B)=\max_i|\lambda_i(B)| .$$

## Formule chiave
Condizione sufficiente: $\rho(B)\le\|B\|$ per le norme $1,2,\infty$, quindi basta $\|B\|<1$ in una di esse. La rapidità dipende da $\rho(B)$: più è piccolo, più la convergenza è veloce.

## Intuizione
L'errore viene moltiplicato per $B$ a ogni passo: è un punto fisso lineare $\mathbf x=B\mathbf x+D^{-1}\mathbf b$, e la contrazione è misurata dal raggio spettrale.

## Come si usa
Jacobi ($D$ = diagonale di $A$), Gauss-Seidel ($D$ = parte triangolare inferiore) e SOR sono casi particolari. Proprietà generali riassunte nelle slide: $\mathbf x$ è il limite di una successione (in precisione infinita si ottiene solo approssimata), $A$ non viene modificata, i metodi sono efficienti per matrici sparse e grandi.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 40, 44-47, 50-54, 98).

## Prerequisiti
- [[Norma spettrale]]: raggio spettrale $\rho(B)$
- [[Norme matriciali]]: $\rho(B)\le\|B\|$ dà una condizione sufficiente
- [[Matrice sparsa]]: motivo per evitare i metodi diretti

## Porta a
- [[Metodo di Jacobi]]: $D$ diagonale
- [[Metodo di Gauss-Seidel]]: $D$ triangolare inferiore
- [[Metodo SOR]]: matrice di iterazione con parametro $\omega$

## Collegati
- [[Metodo del punto fisso]]: analogo non lineare, contrazione con $|g'|<1$
- [[Criteri di arresto dei metodi iterativi]]: kmax e tolleranza sull'incremento
- [[Autovalori e autovettori]]: $\rho(B)$ è il massimo modulo degli autovalori
