---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale, Matematica discreta]
livello: [triennale]
aliases: ["invariants of an endomorphism", "traccia di un endomorfismo", "trace", "determinante di un endomorfismo", "invarianti per similitudine", "det(f) = det(b)/det(g)"]
tags: [competenza, area/algebra-geometria]
---

# Invarianti di un endomorfismo

> Traccia, determinante e polinomio caratteristico non dipendono dalla base, quindi si possono calcolare con qualsiasi matrice che rappresenti $f$. Da qui vengono le formule delle curvature gaussiana e media.

## Definizione / enunciato
Un **invariante** di $f:V\to V$ è una quantità associata canonicamente a $f$, senza scegliere una base: per esempio $\ker f$, $\mathrm{Im}f$, il rango. Due matrici che rappresentano $f$ in basi diverse sono simili, $\tilde A=B^{-1}AB$. Quindi un invariante numerico è invariante per similitudine.

Sono invarianti:
- $\det f=\lambda_1\cdots\lambda_n=\det A$. Per Binet, $\det(B^{-1}AB)=\det A$. È reale anche con autovalori complessi.
- $\mathrm{tr}f=\lambda_1+\dots+\lambda_n=\sum_iA_{ii}$.
- Il polinomio caratteristico $p(\lambda)=\det(A-\lambda\,\mathrm{Id})$, e quindi tutti i suoi coefficienti.

**Proposizione (senza dimostrazione).** Sia $f$ simmetrico rispetto a una metrica $g$, con forma bilineare associata $b(v,w)=g(f(v),w)$. Allora
$$\det f=\frac{\det b}{\det g}=\det A,\qquad \mathrm{tr}f=\mathrm{tr}(g^{-1}b)=\mathrm{tr}A,$$
dove $A$ è qualsiasi matrice che rappresenta $f$.

## Formule chiave
In dimensione 2:
$$p(\lambda)=\lambda^2-\mathrm{tr}(A)\lambda+\det A$$
e (conto lasciato da svolgere)
$$\mathrm{tr}f=\frac{g_{22}b_{11}-2g_{12}b_{12}+g_{11}b_{22}}{g_{11}g_{22}-g_{12}^2}.$$

## Intuizione
Il determinante misura come $f$ cambia i volumi, la traccia ne dà la parte "infinitesima". Nessuno dei due può dipendere dalle coordinate scelte. La formula $\det b/\det g$ evita di calcolare la matrice $g^{-1}b$.

## Come si usa
Applicata all'operatore forma $-N_*$, con $g$ = prima forma e $b$ = seconda forma:
- $K=\dfrac{LN-M^2}{EG-F^2}$;
- $H=\dfrac12\dfrac{GL-2FM+EN}{EG-F^2}$.

## Nei corsi
- **Geometria differenziale** (triennale): fonte `triennale/ANNO 2/geometria differenziale/Lezione10_GD.pdf` (pp. 25-30). Usati in `Lezione21_GD.pdf` (pp. 10-11).
- **Matematica discreta** (triennale): proprietà della **traccia** richiamate e dimostrate nella lezione 7: $\operatorname{tr}(AB)=\operatorname{tr}(BA)$; invarianza per permutazioni circolari, $\operatorname{tr}(ABC)=\operatorname{tr}(BCA)=\operatorname{tr}(CAB)$; quindi $\operatorname{tr}(S^{-1}AS)=\operatorname{tr}A$. Per $A$ reale simmetrica, $A=SDS^{-1}$ dà $\operatorname{tr}A^p=\sum_i\lambda_i^p$. Applicate alla matrice di adiacenza contano archi ($\operatorname{tr}A^2=2|E|$) e triangoli ($\operatorname{tr}A^3=6\cdot\#$). Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 42, 46-48); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§6.1.3-6.1.4, pp. 114-120).

## Prerequisiti
- [[Endomorfismo simmetrico]]: f simmetrico rispetto a g, b = g·A
- [[Matrici simili]]: l'invarianza è invarianza per similitudine
- [[Autovalori e autovettori]]: det e traccia sono prodotto e somma degli autovalori

## Porta a
- [[Curvatura gaussiana]]: K = det(-N_*) = det b/det g
- [[Curvatura media]]: H = ½ tr(-N_*)

## Collegati
- [[Determinante]]: teorema di Binet per l'invarianza
- [[Potenze della matrice di adiacenza]]: $\operatorname{tr}A^k$ conta i percorsi chiusi di un grafo (Matematica discreta)
- [[Spettro di un grafo]]: i momenti spettrali $\sum\lambda_i^p$ sono tracce (Matematica discreta)
