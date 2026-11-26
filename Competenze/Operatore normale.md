---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["normal operator", "operatore normale limitato", "T*T = TT*", "operatori autoaggiunti, unitari e normali"]
tags: [competenza, area/analisi]
---

# Operatore normale

> Un operatore che commuta con il proprio aggiunto ($T^*T=TT^*$): è la classe che contiene autoaggiunti e unitari e per cui (se compatto) vale il teorema spettrale.

## Definizione / enunciato
Sia $H$ di Hilbert e $T\in\mathcal B(H)$ (Def. 10.8). $T$ è
- **autoaggiunto** se $T^*=T$;
- **normale** se $T^*T=TT^*$;
- **unitario** se $T^*T=TT^*=\mathrm{id}_H$.
$$T\ \text{autoaggiunto}\Rightarrow T\ \text{normale}\Leftarrow T\ \text{unitario},$$
e le implicazioni opposte in generale non valgono.

## Formule chiave
Prop. 10.17: se $T$ è normale,
$$\|Tx\|=\|T^*x\|,\quad\operatorname{Ker}T=\operatorname{Ker}T^*,\quad T-\lambda\,\mathrm{id}\ \text{normale},\quad\operatorname{Ker}(T-\lambda)=\operatorname{Ker}(T^*-\bar\lambda).$$
Prop. 10.26(iii): se $T$ è normale e $\lambda\ne\mu$, $E_T(\lambda)\perp E_T(\mu)$.
Se $T$ è normale, $\sigma_r(T)=\emptyset$ (Prop. 10.24). L'insieme degli operatori normali è chiuso in $\mathcal B(H)$ (Prop. 10.15).

## Intuizione
La normalità è esattamente ciò che serve perché autovettori di autovalori diversi siano ortogonali, come per le matrici hermitiane e unitarie: è la condizione per diagonalizzare in una base ortonormale.

## Come si usa
Esempi (Es. 10.11): lo shift $S$ su $\ell^2$ non è normale ($SS^*=\mathrm{id}\ne S^*S$); $D_w$ è sempre normale, autoaggiunto se e solo se $w$ è reale, unitario se e solo se $|w_k|=1$; $T^*T$ è sempre autoaggiunto. L'operatore integrale con $K(x,y)=e^{x-y}$ ha autospazi non ortogonali, quindi non è normale (Es. 11.29).

## Nei corsi
- **Analisi funzionale** (triennale): §10.2 "Operatori autoaggiunti, unitari, normali e proiezioni ortogonali" (Def. 10.8-10.9, Es. 10.11, Prop. 10.13-10.17), Prop. 10.24, 10.26. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 152-156, 158, 162); `triennale/ANNO 3/analisi funzionale/09_aggiunto_handout.pdf` (pp. 6-9, 13).

## Prerequisiti
- [[Operatore aggiunto]]: definizione tramite T*

## Porta a
- [[Teorema spettrale per operatori compatti]]: vale per i compatti normali

## Collegati
- [[Endomorfismo simmetrico]]: gli autoaggiunti sono un caso particolare
- [[Trasformazione unitaria]]: gli unitari sono un caso particolare
- [[Autospazio]]: autospazi di un normale sono ortogonali
- [[Operatore di shift]]: esempio di operatore non normale
- [[Operatore di moltiplicazione]]: esempio di operatore sempre normale
