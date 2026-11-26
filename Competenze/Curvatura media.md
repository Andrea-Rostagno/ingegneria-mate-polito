---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["mean curvature", "H", "H = ½ tr(-N_*)"]
tags: [competenza, area/algebra-geometria]
---

# Curvatura media

> $H=\frac12\mathrm{tr}(-N_*)=\frac{k_1+k_2}{2}$ è la media delle curvature principali. Diversamente da $K$, dipende anche da come la superficie sta nello spazio (il cilindro ha $K=0$ ma $H\neq0$).

## Definizione / enunciato
$$H=\frac12\,\mathrm{tr}(-N_*).$$
Si usa $(-N_*)_{ij}=(g_S^{-1})_{ik}(b_S)_{kj}$, con la convenzione di Einstein (dimostrato in L21 p. 11).

## Formule chiave
$$H=\frac12\,\frac{GL-2FM+EN}{EG-F^2}$$
Per il grafico $(u,v,f(u,v))$:
$$H=\frac12\,\frac{(1+f_v^2)f_{uu}-2f_uf_vf_{uv}+(1+f_u^2)f_{vv}}{(1+f_u^2+f_v^2)^{3/2}}$$

## Intuizione
La traccia somma le curvature delle due sezioni principali. Il segno dipende dalla scelta del versore normale: cambiando $N$ cambia segno $H$, mentre $K$ no.

## Come si usa
Esempi della lezione:
- Cilindro: $H=-\frac1{2r}$.
- Sfera: $H=-\frac1r$.
- Piano: $H=0$.
- Paraboloide: $H=\frac{2(1+2u^2+2v^2)}{(1+4u^2+4v^2)^{3/2}}$.
- $P=(u+v,u-v,u^2-v^2)$: $H=\frac{u^2-v^2}{(1+2u^2+2v^2)^{3/2}}$.

Serve a trovare i punti ombelicali con la condizione $H^2=K$ (paraboloide, L23 pp. 11-12).

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione21_GD.pdf` (pp. 8, 11, 15);
  - `triennale/ANNO 2/geometria differenziale/Lezione22_GD.pdf` (pp. 9, 13);
  - `triennale/ANNO 2/geometria differenziale/Lezione23_GD.pdf` (pp. 4, 9, 11-12).

## Prerequisiti
- [[Operatore forma]]: H è metà della sua traccia
- [[Invarianti di un endomorfismo]]: tr(-N_*) = tr(g⁻¹b)
- [[Seconda forma fondamentale]]: coefficienti L, M, N

## Porta a
- Nessuno.

## Collegati
- [[Curvatura gaussiana]]: l'altro invariante di -N_*, intrinseco
- [[Curvature principali]]: H è la loro media
