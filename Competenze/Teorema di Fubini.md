---
tipo: competenza
area: analisi
corsi: [Analisi 2, Prob e statistica]
livello: [triennale]
aliases: ["Fubini's theorem", "integrali iterati", "domini normali", "dominio semplice per fili verticali", "dominio semplice per fili orizzontali", "integrazione per fili", "teorema di Tonelli", "Tonelli's theorem", "teorema di Fubini-Tonelli"]
tags: [competenza, area/analisi]
---

# Teorema di Fubini

> Su domini "semplici per fili" un integrale doppio o triplo si calcola come integrali iterati di una variabile.

## Definizione / enunciato
$\Omega$ è **semplice per fili verticali** se $\Omega=\{(x,y):x\in[a,b],\ g(x)\le y\le h(x)\}$ con $g\le h$ continue; **per fili orizzontali** se $\Omega=\{(x,y):y\in[c,d],\ g(y)\le x\le h(y)\}$.

**Teorema (Fubini).** Per $f$ continua e limitata:
$$\iint_\Omega f\,dx\,dy=\int_a^b\Big(\int_{g(x)}^{h(x)}f(x,y)\,dy\Big)dx\quad\text{oppure}\quad=\int_c^d\Big(\int_{g(y)}^{h(y)}f(x,y)\,dx\Big)dy.$$
In $\mathbb R^3$: se $\Omega=\{(x,y,z):(x,y)\in D,\ g(x,y)\le z\le h(x,y)\}$,
$$\iiint_\Omega f\,dx\,dy\,dz=\iint_D\Big(\int_{g(x,y)}^{h(x,y)}f\,dz\Big)dx\,dy,$$
e analogamente per fili paralleli agli assi $x$ o $y$.

## Formule chiave
Domini non semplici si spezzano in pezzi semplici (additività).

## Intuizione
Si somma prima lungo ogni filo (l'integrale interno è una funzione della variabile esterna) e poi si sommano i fili. La scelta della direzione può semplificare molto il calcolo.

## Come si usa
- Dominio tra l'asse $x$, $y=\sqrt x$ e $y=2-x^2$ con $f=x+y$: per verticali serve spezzare in $x=1$, per orizzontali basta $\{y\in[0,1],\ y^2\le x\le\sqrt{2-y}\}$.
- Parallelogramma di vertici $(0,0),(4,0),(10,6),(6,6)$: per verticali tre pezzi, per orizzontali $\{y\in[0,6],\ y\le x\le y+4\}$ e $\iint x=\int_0^6(4y+8)\,dy=120$.
- Cilindro $x^2+y^2\le4$ tagliato dal piano $z=x+y+10$: $\iiint_\Omega(x+2z)=412\pi$, usando le simmetrie per annullare i termini dispari.

## Nei corsi
- **Analisi 2** (triennale): fili verticali il 19/10, orizzontali e additività il 24/10, tripli il 26/10/2022. Fonti: `triennale/ANNO 2/analisi 2/AII 07 2022 integrali doppi.pdf` (pp. 12-14); `triennale/ANNO 2/analisi 2/AII 08 2022 integrali doppi.pdf` (pp. 1-7); `triennale/ANNO 2/analisi 2/AII 09 2022 int tripli.pdf` (pp. 3-7).
- **Prob e statistica** (triennale): versione per misure prodotto. **Tonelli**: $(\mathcal X_1,\mathcal Q_1,\mu_1)$, $(\mathcal X_2,\mathcal Q_2,\mu_2)$ con $\mu_i$ $\sigma$-finite, $f:\mathcal X_1\times\mathcal X_2\to\overline{\mathbb R}$ misurabile e $f\ge0$: le sezioni $f(x,\cdot)$, $f(\cdot,y)$ sono misurabili, $x\mapsto\int f(x,y)d\mu_2(y)$ e $y\mapsto\int f(x,y)d\mu_1(x)$ sono misurabili $\ge0$ e i due integrali iterati coincidono con $\int f\,d(\mu_1\otimes\mu_2)$. **Fubini**: stessa tesi per $f$ integrabile rispetto a $\mu_1\otimes\mu_2$ (sezioni e integrali parziali integrabili). Usato per le densità marginali $f_X(x)=\int f_Z(x,y)dy$, per $\mathbb E[XY]=\mathbb E[X]\mathbb E[Y]$ con $X\perp Y$ e per la densità congiunta di v.a. indipendenti. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione01&02(04&05-10-2023).pdf` (pp. 11-12); `2023Lezione04(11-10-2023) .pdf` (p. 4); `2023Lezione06(13-10-2023).pdf` (p. 5).

## Prerequisiti
- [[Integrale doppio]]: calcolo per integrali iterati
- [[Teorema fondamentale del calcolo integrale]]: ogni integrale iterato è di Analisi I

## Porta a
- [[Densità congiunta]]: densità marginali come integrali parziali (Prob e statistica)

## Collegati
- [[Misura prodotto]]: versione astratta su $\mu_1\otimes\mu_2$ (Prob e statistica)
- [[Integrale triplo]]: fili paralleli all'asse z
- [[Integrazione per strati]]: fili contro strati
