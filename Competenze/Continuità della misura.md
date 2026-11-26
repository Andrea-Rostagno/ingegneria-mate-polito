---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["continuity of measure", "continuità dal basso", "continuità dall'alto", "liminf di insiemi", "limsup di insiemi", "limite inferiore e superiore di insiemi"]
tags: [competenza, area/analisi]
---

# Continuità della misura

> Una misura passa al limite lungo successioni monotone di insiemi: crescenti sempre, decrescenti se almeno un insieme ha misura finita.

## Definizione / enunciato
In $(X,\mathcal A,\mu)$, $(A_m)_{m\ge1}\subseteq\mathcal A$:
- **dal basso**: se $A_m\subseteq A_{m+1}$ e $A=\bigcup_mA_m$, allora $\mu(A)=\lim_m\mu(A_m)$ ($A_m\nearrow A\Rightarrow\mu(A_m)\nearrow\mu(A)$);
- **dall'alto**: se $A_m\supseteq A_{m+1}$, $A=\bigcap_mA_m$ ed **esiste $k$ con $\mu(A_k)<+\infty$**, allora $\mu(A)=\lim_m\mu(A_m)$.

**Limiti di insiemi**: $\liminf_mA_m=\bigcup_{m\ge1}\bigcap_{k\ge m}A_k$ (punti che stanno definitivamente negli $A_k$), $\limsup_mA_m=\bigcap_{m\ge1}\bigcup_{k\ge m}A_k$ (punti che stanno in infiniti $A_m$); $\liminf\subseteq\limsup$.

## Formule chiave
Dimostrazione dal basso: $B_1=A_1$, $B_m=A_m\setminus A_{m-1}$ disgiunti, e
$$\mu(A)=\sum_{m=1}^\infty\mu(B_m)=\lim_{m\to\infty}\sum_{k=1}^m\mu(B_k)=\lim_{m\to\infty}\mu(A_m).$$
Per $\mu$ finita:
$$\mu(\liminf_mA_m)\le\liminf_m\mu(A_m)\le\limsup_m\mu(A_m)\le\mu(\limsup_mA_m).$$

## Intuizione
È la σ-additività riscritta come continuità. L'ipotesi di finitezza dall'alto serve perché si sottraggono misure: senza di essa si avrebbero forme $\infty-\infty$.

## Come si usa
Dà la continuità a destra e i limiti a $\pm\infty$ della funzione di ripartizione (semirette $(-\infty,x_n]\searrow(-\infty,x_0]$), interviene nella dimostrazione del teorema di Beppo Levi e, con il limsup di insiemi, nel lemma di Borel-Cantelli.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 3; fonte manoscritta. Fonte: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione03(16-03-23) (2).pdf` (lezione 3, pp. 1-7; la disuguaglianza con liminf/limsup è enunciata senza dimostrazione).

## Prerequisiti
- [[Spazio di misura]]: conseguenza della sigma-additività

## Porta a
- [[Lemma di Borel-Cantelli]]: limsup di insiemi
- [[Teorema di convergenza monotona]]: usata nella dimostrazione
- [[Funzione di ripartizione]]: continuità a destra e limiti

## Collegati
- Nessuno.
