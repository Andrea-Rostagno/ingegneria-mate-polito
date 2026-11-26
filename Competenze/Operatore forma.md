---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["shape operator", "operatore di Weingarten", "Weingarten map", "-N_*", "-dN", "endomorfismo di Weingarten"]
tags: [competenza, area/algebra-geometria]
---

# Operatore forma

> $-N_*:T_pS\to T_pS$ è l'endomorfismo simmetrico che codifica come si piega la superficie. Autovalori, determinante e traccia danno curvature principali, curvatura gaussiana e media.

## Definizione / enunciato
L'**operatore forma** (shape operator) è
$$-N_*:T_pS\to T_pS .$$
Il segno meno è convenzionale (L21 p. 2). Il nome "Weingarten" non compare a lezione. Per la [[Mappa di Gauss]] è un endomorfismo simmetrico rispetto a $g_S$.

La matrice $\sigma$ nella base $(P_u,P_v)$ è data da
$$N_*(P_u)=\sigma_{11}P_u+\sigma_{21}P_v,\qquad N_*(P_v)=\sigma_{12}P_u+\sigma_{22}P_v .$$
Per quanto visto sugli endomorfismi simmetrici ($A=g^{-1}b$):
$$(-N_*)_{ij}=(g_S^{-1})_{ik}(b_S)_{kj}.$$

## Formule chiave
$$(-N_*)=\frac{1}{EG-F^2}\begin{pmatrix}G&-F\\-F&E\end{pmatrix}\begin{pmatrix}L&M\\M&N\end{pmatrix}=\frac{1}{EG-F^2}\begin{pmatrix}GL-FM&GM-FN\\-FL+EM&-FM+EN\end{pmatrix}$$
In generale questa matrice non è simmetrica, perché la base $(P_u,P_v)$ non è ortonormale.

## Intuizione
L'operatore forma dice di quanto ruota la normale per ogni direzione di spostamento sulla superficie. Simmetrico significa che esistono due direzioni ortogonali (le principali) lungo cui la normale ruota "nel piano dello spostamento".

## Come si usa
Esempi della lezione:
- Cilindro: $-N_*(P_u)=-\frac1rP_u$ e $-N_*(P_v)=0$, quindi $(-N_*)=\mathrm{diag}(-\frac1r,0)$.
- Sfera: $N^P_u=\frac1rP_u$ e $N^P_v=\frac1rP_v$, quindi $(-N_*)=-\frac1r I$.
- Paraboloide: $(-N_*)=\frac{2}{(1+4u^2+4v^2)^{3/2}}\begin{pmatrix}1+4v^2&-4uv\\-4uv&1+4u^2\end{pmatrix}$.
- Piano: $-N_*=0$.

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione21_GD.pdf` (pp. 1-2, 10-16);
  - `triennale/ANNO 2/geometria differenziale/Lezione22_GD.pdf` (pp. 8, 11);
  - `triennale/ANNO 2/geometria differenziale/Lezione23_GD.pdf` (pp. 4, 6, 9).

## Prerequisiti
- [[Mappa di Gauss]]: -N_* è il suo differenziale cambiato di segno
- [[Endomorfismo simmetrico]]: A = g⁻¹ b e teorema spettrale

## Porta a
- [[Seconda forma fondamentale]]: forma bilineare associata a -N_*
- [[Curvature principali]]: autovalori di -N_*
- [[Curvatura gaussiana]]: det(-N_*)
- [[Curvatura media]]: ½ tr(-N_*)

## Collegati
- Nessuno.
