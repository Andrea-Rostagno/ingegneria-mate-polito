---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["compact operator", "K(X,Y)", "operatore di rango finito", "finite-rank operator", "approssimazione con operatori di rango finito", "operatore completamente continuo"]
tags: [competenza, area/analisi]
---

# Operatore compatto

> Un operatore limitato che manda successioni limitate in successioni con sottosuccessioni convergenti: in uno spazio di Hilbert sono esattamente i limiti in norma di operatori di rango finito, cioè le "matrici infinite" più vicine alla dimensione finita.

## Definizione / enunciato
$T\in\mathcal B(X,Y)$ è **compatto** (Def. 11.1) se per ogni $(x_n)$ limitata in $X$, $(Tx_n)$ ha una sottosuccessione convergente in $Y$; $\mathcal K(X,Y)$ è l'insieme dei compatti. Equivalentemente (Prop. 11.3) $T(A)$ è relativamente compatto per ogni $A$ limitato, ovvero $\overline{T(B_X(0,1))}$ è compatto.

## Formule chiave
- Rango finito ($\dim\operatorname{Im}T<\infty$) $\Rightarrow$ compatto; se $\dim X<\infty$ o $\dim Y<\infty$, $\mathcal K=\mathcal B$. $\operatorname{Im}T$ è separabile.
- Ideale: se $T$ **oppure** $S$ è compatto, $ST$ è compatto.
- Se $\dim X=\infty$: $\mathrm{id}_X\notin\mathcal K(X)$ e nessun isomorfismo è compatto.
- Teor. 11.12: $\mathcal K(X,Y)$ è un sottospazio, chiuso in $\mathcal B(X,Y)$ se $Y$ è di Banach; limiti in norma di operatori di rango finito sono compatti.
- Teor. 11.17 / Cor. 11.20 (Hilbert $H$): $T\in\mathcal K(X,H)\iff T=\lim_n T_n$ in norma con $T_n$ di rango finito.
- Prop. 11.21: $T\in\mathcal K(H_1,H_2)\iff T^*\in\mathcal K(H_2,H_1)$; $\dim\operatorname{Im}T=\dim\operatorname{Im}T^*$ per rango finito.

## Intuizione
Un compatto "comprime" la palla unitaria (non compatta in dimensione infinita, lemma di Riesz) in un insieme relativamente compatto: in sostanza vive su "poche dimensioni" a meno di errori piccoli. Per questo la sua teoria spettrale somiglia a quella delle matrici.

## Come si usa
Esempi (Es. 11.8, 11.11, 11.15): $Tf(t)=t\int_0^1f(s)\,ds$ su $L^2(0,1)$ è compatto (operatore integrale con nucleo $K(t,s)=t$); shift $S$, $S^*$ non compatti; $D_w$ ha rango finito $\iff w\in c_{00}$ ed è compatto $\iff w\in c_0$ (limite di $D_{w^{(N)}}$ troncati); gli operatori integrali con nucleo $L^2$ su $L^2$ o continuo su $C$ sono compatti. Per mostrare che un operatore è compatto lo si approssima in norma con operatori di rango finito, o si usa Ascoli-Arzelà in $C(M)$.

## Nei corsi
- **Analisi funzionale** (triennale): §11.1 "Operatori compatti" (Def. 11.1, Prop. 11.3, Cor. 11.4, Prop. 11.5, Cor. 11.6, Es. 11.8, Prop. 11.9-11.10, Es. 11.11, Teor. 11.12, Cor. 11.13, Es. 11.15, Teor. 11.17, Cor. 11.20, Prop. 11.21). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 164-173); `triennale/ANNO 3/analisi funzionale/10_operatoricompatti_handout.pdf` (pp. 2-5).

## Prerequisiti
- [[Operatore lineare limitato]]: K(X,Y) ⊆ B(X,Y)
- [[Compattezza in spazi metrici]]: relativa compattezza dell'immagine
- [[Lemma di Riesz]]: l'identità non è compatta in dimensione infinita

## Porta a
- [[Alternativa di Fredholm]]: perturbazioni compatte dell'identità
- [[Spettro di un operatore compatto]]: spettro discreto
- [[Teorema spettrale per operatori compatti]]: diagonalizzazione

## Collegati
- [[Operatore integrale]]: esempio fondamentale di operatore compatto
- [[Teorema di Ascoli-Arzelà]]: strumento per la compattezza su C(M)
- [[Operatore di moltiplicazione]]: compatto se e solo se w ∈ c_0
- [[Operatore di shift]]: esempio non compatto
