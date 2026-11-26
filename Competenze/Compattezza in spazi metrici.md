---
tipo: competenza
area: analisi
corsi: [Analisi funzionale, Istituzioni topologia]
livello: [triennale]
aliases: ["compactness in metric spaces", "insieme compatto", "compatto per successioni", "sequential compactness", "relativamente compatto", "teorema di Heine-Borel", "Heine-Borel theorem", "ricoprimento aperto", "teorema su compattezza per successioni", "totalmente limitato", "totally bounded"]
tags: [competenza, area/analisi]
---

# Compattezza in spazi metrici

> Un insieme è compatto se ogni sua successione ha una sottosuccessione convergente nell'insieme: è la proprietà che garantisce esistenza di massimi, limiti e soluzioni.

## Definizione / enunciato
In $(M,d)$, $K\subseteq M$ è **compatto** se ogni successione a valori in $K$ ha una sottosuccessione convergente a un punto di $K$; $E$ è **relativamente compatto** se $\overline E$ è compatto.
**Prop. 2.23(x)-(xi):** se $K$ è compatto è chiuso e limitato; $K$ è compatto se e solo se ogni ricoprimento aperto di $K$ ha un sottoricoprimento finito.
**Teorema di Heine-Borel:** in $(\mathbb F^n,d_2)$ un insieme è compatto se e solo se è chiuso e limitato.

## Formule chiave
$$K\text{ compatto}\ \Longrightarrow\ K\text{ chiuso e limitato},\qquad\text{il viceversa vale in }\mathbb F^n\text{ ma non in generale.}$$
Immagine continua di un compatto è compatta; se $M$ è compatto, $C_{\mathbb F}(M)\subseteq F_b(M,\mathbb F)$.

## Intuizione
In dimensione finita "chiuso e limitato" basta, grazie a Bolzano-Weierstrass. In dimensione infinita no: in $\ell^2$ la successione $e^{(n)}$ della base canonica è limitata, ma $\|e^{(n)}-e^{(m)}\|=\sqrt2$ per $n\ne m$, quindi non ha sottosuccessioni convergenti (calcolo diretto dalla definizione di $e^{(n)}$, Es. 6.34).

## Come si usa
Per dimostrare l'esistenza di un minimo si estrae da una successione minimizzante una sottosuccessione convergente. In dimensione infinita la compattezza della palla fallisce (lemma di Riesz) e va sostituita con criteri specifici (Ascoli-Arzelà in $C(M)$) o con convergenze deboli (Banach-Alaoglu).

## Nei corsi
- **Analisi funzionale** (triennale): §2.4 (Def. 2.21, Prop. 2.23, Teor. 2.24 Heine-Borel), §2.5 (immagine continua di compatti). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 17-18, 21); `triennale/ANNO 3/analisi funzionale/02_spazimetrici_handout.pdf` (pp. 14, 19).
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): qui la definizione di base è quella per ricoprimenti (vedi la nota sugli spazi topologici compatti) e la versione per successioni è un teorema. In uno spazio topologico, se $K$ è compatto ogni sottoinsieme infinito $E\subseteq K$ ha $\mathrm{Der}(E)\neq\emptyset$ (Teor. 5.21). Ne segue che in uno spazio metrico ogni successione in un compatto ha una sottosuccessione convergente in $K$ (Prop. 5.22). **Teor. 5.24:** $K$ è compatto per $\tau_d$ se e solo se è compatto per successioni (enunciato; dimostrata solo l'implicazione 5.22). Un compatto metrico è limitato (Prop. 5.11) e completo (Prop. 5.27). **Heine-Borel** (Teor. 5.19): in $(\mathbb R^n,\mathcal E_n)$ compatto $\iff$ chiuso e limitato. La dimostrazione mette $K$ dentro $\prod_{i=1}^n[\bar x_i-\delta,\bar x_i+\delta]$ con $\delta>\mathrm{diam}(K)$ e usa la compattezza dei prodotti di compatti. Controesempio: $[1,2)$ è chiuso e limitato in $[0,2)$ ma non compatto (Es. 5.13). Nella lista delle dimostrazioni per l'orale ci sono il punto 8 (Heine-Borel) e il punto 9 (Teor. 5.21, Prop. 5.22). Le dispense Pejsachowicz (cap. 10) dimostrano l'equivalenza completa per gli spazi metrici. Il Teor. 10.1 mette insieme ricoprimenti finiti, punto di accumulazione per ogni sottoinsieme infinito e compattezza per successioni. Il Teor. 10.15 dà compatto $\iff$ completo e totalmente limitato. Riportano anche Ascoli-Arzelà (Teor. 10.18). Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§5.1, §5.3-5.4, pp. 38, 40-43); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (Teor. 8.17, cap. 10).

## Prerequisiti
- [[Aperti e chiusi in uno spazio metrico]]: chiusura e limitatezza
- [[Sottosuccessione]]: definizione sequenziale di compatto

## Porta a
- [[Teorema di Heine-Cantor]]: continue su compatti sono uniformemente continue
- [[Teorema di Weierstrass]]: massimo e minimo su un compatto
- [[Teorema di Ascoli-Arzelà]]: compattezza in C(M)
- [[Lemma di Riesz]]: in dimensione infinita la palla non è compatta
- [[Operatore compatto]]: manda limitati in relativamente compatti

## Collegati
- [[Spazio separabile]]: ogni spazio metrico compatto è separabile
- [[Spazio topologico compatto]]: definizione per ricoprimenti, equivalente nel caso metrico (Istituzioni topologia)
- [[Prodotto di spazi compatti]]: usato nella dimostrazione di Heine-Borel (Istituzioni topologia)
