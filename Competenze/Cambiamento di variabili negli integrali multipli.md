---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["change of variables in multiple integrals", "cambio di variabili negli integrali doppi", "coordinate polari negli integrali doppi", "coordinate ellittiche", "coordinate cilindriche negli integrali tripli", "fattore r"]
tags: [competenza, area/analisi]
---

# Cambiamento di variabili negli integrali multipli

> Passando a nuove coordinate $(u,v)$ con $x=g_1(u,v)$, $y=g_2(u,v)$ l'integrale si trasforma moltiplicando per $|\det J_g|$.

## Definizione / enunciato
Se $g:\tilde\Omega\to\Omega$ è $C^1$ e biunivoca (ipotesi "del tipo" indicate a lezione),
$$\iint_\Omega f(x,y)\,dx\,dy=\iint_{\tilde\Omega}f(g_1(u,v),g_2(u,v))\,|\det J_g|\,du\,dv,$$
e in tre variabili, per $g=(g_1,g_2,g_3)$ $C^1$ e iniettiva,
$$\iiint_\Omega f\,dx\,dy\,dz=\iiint_{\tilde\Omega}f(g(u,v,w))\,|\det J_g|\,du\,dv\,dw.$$

## Formule chiave
- Polari $x=r\cos\theta$, $y=r\sin\theta$: $|\det J_g|=r$, quindi $\iint_\Omega f=\iint_{\tilde\Omega}r\,f(r\cos\theta,r\sin\theta)\,dr\,d\theta$.
- Ellittiche $x=ar\cos\theta$, $y=br\sin\theta$: $|\det J_g|=abr$; l'ellisse $\frac{x^2}{a^2}+\frac{y^2}{b^2}\le1$ diventa il rettangolo $[0,1]\times[0,2\pi]$.
- Cilindriche $(r,\theta,z)$: $|\det J_g|=r$.

## Intuizione
Il rettangolino $\Delta r\times\Delta\theta$ va nella "fetta di torta" di area $r\,\Delta r\,\Delta\theta$: per questo compare il fattore $r$. In generale $|\det J_g|$ misura come $g$ dilata le aree.

## Come si usa
Si sceglie la coordinata adatta alle simmetrie del dominio e della funzione.
- Volume della semisfera: $\int_0^R2\pi r\sqrt{R^2-r^2}\,dr=\frac23\pi R^3$.
- $\iint_{x^2+y^2\le4}x^2=\int_0^{2\pi}\!\int_0^2r^3\cos^2\theta\,dr\,d\theta=4\pi$ (usando $\int_0^{2\pi}\cos^2=\int_0^{2\pi}\sin^2=\pi$).
- Cilindro $x^2+y^2\le9$ sotto il paraboloide $z=x^2+y^2+1$: $\iiint z=2\pi\int_0^3\frac{r(r^2+1)^2}2\,dr$ (il calcolo finale non è scritto a lezione).

## Nei corsi
- **Analisi 2** (triennale): lezioni del 24/10/2022 (doppi) e successiva (tripli, cilindriche). Fonti: `triennale/ANNO 2/analisi 2/AII 08 2022 integrali doppi.pdf` (pp. 9-15); `triennale/ANNO 2/analisi 2/AII 09 2022 int tripli.pdf` (p. 7); `triennale/ANNO 2/analisi 2/AII 10 2022 coord sferiche e int linea.pdf` (pp. 1-3).

## Prerequisiti
- [[Matrice jacobiana]]: fattore |det J_g|
- [[Determinante]]: |det J_g| nel cambio di variabili
- [[Integrale doppio]]: si trasforma l'integrale doppio
- [[Integrazione per sostituzione]]: analogo in una variabile

## Porta a
- [[Coordinate sferiche]]: coordinate sferiche

## Collegati
- [[Coordinate polari e cilindriche]]: |det J| = r per polari e cilindriche
