---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["multiplication operator", "operatore diagonale", "diagonal operator", "D_w", "moltiplicazione per w"]
tags: [competenza, area/analisi]
---

# Operatore di moltiplicazione

> L'operatore $D_w$ su $\ell^2$ che moltiplica componente per componente per una successione limitata $w$: è la "matrice diagonale infinita", su cui tutte le proprietà si leggono direttamente da $w$.

## Definizione / enunciato
Dato $w\in\ell^\infty$ (Es. 7.8(8)):
$$D_wx=w\cdot x=(w_kx_k)_{k\in\mathbb N}\qquad x\in\ell^2,$$
con $D_w\in\mathcal B(\ell^2)$ e $\|D_w\|_{op}=\|w\|_\infty$.

## Formule chiave
- Aggiunto: $D_w^*=D_{\bar w}$ (Es. 10.4(3)).
- $D_w$ è sempre **normale**; autoaggiunto $\iff w$ reale; unitario $\iff|w_k|=1\ \forall k$ (Es. 10.11).
- Spettro (Es. 10.25): $D_w-\lambda I=D_{w-\lambda\mathbf 1}$ e
$$\sigma(D_w)=\overline{\{w_k:k\in\mathbb N\}},\quad\sigma_p(D_w)=\{w_k\},\quad\sigma_r(D_w)=\emptyset,\quad\sigma_c(D_w)=\sigma(D_w)\setminus\sigma_p(D_w).$$
- Rango finito $\iff w\in c_{00}$; **compatto** $\iff w\in c_0$ (Es. 11.15(1): per $w\in c_0$ si approssima $w$ con $w^{(n)}\in c_{00}$ e $D_{w^{(n)}}\to D_w$ in norma).

## Intuizione
Gli autovettori sono i vettori $e^{(k)}$ della base canonica con autovalori $w_k$; i punti di accumulazione dei $w_k$ che non sono valori assunti finiscono nello spettro continuo. È il modello degli operatori compatti normali: per il teorema spettrale, su uno spazio separabile un tale operatore agisce come un $D_w$ con $w\in c_0$ nella base ortonormale di autovettori ($\Xi T=D_w\Xi$ con $\Xi:H\to\ell^2$, Oss. 11.35).

## Come si usa
Banco di prova per ogni definizione del corso: si calcola tutto in termini di $w$ (norma = sup, inverso esiste se $\inf_k|w_k|>0$, spettro = chiusura dei valori, compattezza = $w_k\to0$).

## Nei corsi
- **Analisi funzionale** (triennale): Es. 7.8(8), Es. 10.4(3), Es. 10.11(2), Es. 10.25(1), Es. 11.15(1), Oss. 11.35. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 92-95, 148, 152, 159, 165); `triennale/ANNO 3/analisi funzionale/06_operatorilimitati_handout.pdf` (p. 6); `triennale/ANNO 3/analisi funzionale/09_aggiunto_handout.pdf` (pp. 3, 7, 12); `triennale/ANNO 3/analisi funzionale/10_operatoricompatti_handout.pdf` (p. 4).

## Prerequisiti
- [[Spazi di successioni lp]]: w in ℓ^∞ e x in ℓ^2
- [[Operatore lineare limitato]]: norma uguale a ‖w‖∞

## Collegati
- [[Spettro di un operatore limitato]]: spettro come chiusura dei valori w_k
- [[Operatore normale]]: sempre normale
- [[Operatore compatto]]: compatto se e solo se w ∈ c_0
- [[Matrice diagonalizzabile]]: analogo finito-dimensionale
