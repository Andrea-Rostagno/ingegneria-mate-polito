---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["Cramer's rule", "teorema di Cramer", "metodo di Cramer", "sistema lineare quadrato", "sistema determinato"]
tags: [competenza, area/algebra-geometria]
---

# Regola di Cramer

> Un sistema quadrato $Ax=b$ è determinato se e solo se $A$ è invertibile; in tal caso $x_i=|A_i(b)|/|A|$.

## Definizione / enunciato
Un s.l. è **quadrato** se $A$ è quadrata (tante equazioni quante incognite).

**Teorema di Cramer.** $Ax=b$ quadrato ammette una e una sola soluzione se e solo se $A$ è invertibile (equivalentemente $\det A\neq0$, o $\mathrm{rank}A=n$). Il teorema non pone condizioni su $b$, solo su $A$. La soluzione è $x=A^{-1}b$.

**Regola di Cramer.** Detta $A_i(b)$ la matrice ottenuta sostituendo la $i$-esima colonna di $A$ con $b$:
$$x_i=\frac{|A_i(b)|}{|A|},\qquad i=1,\dots,n .$$

## Formule chiave
$$\det A\neq0\ \Rightarrow\ x=A^{-1}b,\qquad x_i=\frac{\det A_i(b)}{\det A}$$

## Intuizione
È il caso $n=r$ del teorema di Rouché-Capelli: se $A$ ha rango massimo anche $(A|b)$ ce l'ha, quindi il sistema è sempre compatibile e senza parametri liberi. La formula viene da $A^{-1}={}^t\tilde A/\det A$ applicata a $b$: il numeratore è lo sviluppo di Laplace di $A_i(b)$ lungo la colonna $i$.

## Come si usa
- Esempio (p. 34 di `8_Sistemi_lineari.pdf`): sviluppando lungo la seconda riga si trova $\det A=-1$, quindi $A$ è invertibile e $x_1=1/(-1)=-1$, $x_2=-2/(-1)=2$, $x_3=1/(-1)=-1$.
- Quiz (p. 34): se $AX=B$ quadrato ha due soluzioni distinte allora ha infinite soluzioni, e $A$ non è invertibile.
- Il calcolo di $n+1$ determinanti è costoso: le slide numeriche (`2022_cn3_sistemi_lineari_print.pdf`) stimano un costo dell'ordine di $(n+1)!$; per $n=24$, a $10^{15}$ operazioni al secondo, servirebbero circa 492 anni contro $\approx4.6\cdot10^{-12}$ s con Gauss.

## Nei corsi
- **Algebra lineare** (triennale): sistemi lineari quadrati e equazioni matriciali (slide di S. Mercadante). Nel modulo numerico Cramer è citato solo come metodo troppo costoso rispetto a Gauss. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/8_Sistemi_lineari.pdf` (p. 32-34); `Appunti, riassunti e formulari/9_Equazioni_Matriciali_Lineari.pdf` (p. 9).

## Prerequisiti
- [[Teorema di Rouché-Capelli]]: caso quadrato con rango massimo
- [[Determinante]]: soluzione come rapporto di determinanti
- [[Matrice inversa]]: x = A⁻¹b per sistemi quadrati regolari

## Porta a
- Nessuno.

## Collegati
- [[Metodo di eliminazione di Gauss]]: alternativa molto meno costosa per n grande
