---
tipo: competenza
area: analisi
corsi: [Analisi 1, Analisi 2, Ricerca operativa, Analisi funzionale, Istituzioni topologia]
livello: [triennale]
aliases: ["extreme value theorem", "Weierstrass theorem", "massimo e minimo assoluto"]
tags: [competenza, area/analisi]
---

# Teorema di Weierstrass

> Una funzione continua su un intervallo chiuso e limitato ha massimo e minimo assoluti, e la sua immagine è l'intervallo $[m,M]$.

## Definizione / enunciato
**Teorema 1.22** (Mazzi). Sia $f$ continua su $[a,b]$ chiuso e limitato. Allora
1. $f$ è limitata;
2. $f$ ha massimo e minimo assoluti: esistono $\underline x,\overline x\in[a,b]$ con $m=f(\underline x)\le f(x)\le f(\overline x)=M$ per ogni $x\in[a,b]$;
3. $f([a,b])=[m,M]$.

Tutte le ipotesi sono necessarie (oss. 1.14): togliendo la continuità, la chiusura o la limitatezza dell'intervallo la tesi può fallire.

## Formule chiave
Dimostrazione del massimo: per ogni $n$ esiste $x_n$ con $\beta-\frac1n<f(x_n)\le\beta=\sup f$; per Bolzano-Weierstrass $x_{n_k}\to\overline x\in[a,b]$ e per continuità
$$f(\overline x)=\lim_k f(x_{n_k})=\beta .$$

## Intuizione
Su un intervallo chiuso e limitato le successioni "non possono scappare": la successione che si avvicina al sup ha una sottosuccessione convergente a un punto dell'intervallo, dove la continuità fa raggiungere il sup.

## Come si usa
Garantisce l'esistenza dei massimi e minimi globali da cercare tra punti critici interni, punti di non derivabilità ed estremi dell'intervallo. È l'ingrediente del teorema di Rolle. Esempio di Mazzi (oss. 1.14): $\arctan$ è continua sull'intervallo illimitato $[0,+\infty)$ ma non ha massimo.

## Nei corsi
- **Analisi 1** (triennale): "teorema di Weierstrass". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (teor. 1.22, oss. 1.14, pp. 56-57); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 3.2.10 "Weierstrass-0", 3.2.15 "Weierstrass-1", PDF pp. 98-100).
- **Analisi 2** (triennale): versione in $\mathbb R^n$. Se $f:D\to\mathbb R$, $D\subset\mathbb R^n$, è continua su $D$ e $D$ è compatto, allora $f$ ha massimo e minimo assoluti su $D$; in $\mathbb R^n$ "compatto" equivale a "chiuso e limitato". Serve a garantire l'esistenza degli estremi assoluti da cercare tra i punti critici. Fonte: `triennale/ANNO 2/analisi 2/AII 06 2022 max min chain rule.pdf` (lez. 17/10/2022, p. 9).
- **Ricerca operativa** (triennale): garantisce l'esistenza di minimi e massimi di funzioni continue su un compatto; su un aperto o senza vincoli non vale, e si chiede allora la **coercività** $\lim_{\|\mathbf x\|\to\infty}f(\mathbf x)=+\infty$ (il costo del modello EOQ è convesso e coercivo sul dominio aperto $Q>0$). Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 4); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap1.pdf` (p. 7).
- **Analisi funzionale** (triennale): versione su spazi metrici (Teor. 2.36): se $M$ è uno spazio metrico compatto e $f:M\to\mathbb R$ è continua, $f$ è limitata e ha massimo e minimo. Conseguenza: $C_{\mathbb F}(M)\subseteq F_b(M,\mathbb F)$, quindi $(C_{\mathbb F}(M),d_\infty)$ è completo (Teor. 2.37) e $\sup_{[a,b]}|f-g|=\max_{[a,b]}|f-g|$. In dimensione infinita l'esistenza del minimo si ottiene invece con la convergenza debole (Prop. 9.33). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 21, 146); `triennale/ANNO 3/analisi funzionale/02_spazimetrici_handout.pdf` (p. 19).
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): forma "più generale" in uno spazio topologico qualsiasi (Teor. 5.15). Se $f:(X,\tau)\to(\mathbb R,\mathcal E_1)$ è continua e $K\subseteq X$ è compatto, esistono $p_1,p_2\in K$ con $f(p_1)\le f(p)\le f(p_2)$ per ogni $p\in K$. La dimostrazione: $f(K)$ è compatto (Teor. 5.14), quindi chiuso e limitato in $\mathbb R$ (Teor. 5.12), e contiene sup e inf. Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (pp. 38-39); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (Teor. 8.13 "Weierstrass generalizzato", Cor. 8.15).

## Prerequisiti
- [[Funzione continua]]: ipotesi
- [[Sottosuccessione]]: si usa Bolzano-Weierstrass
- [[Teorema dei valori intermedi]]: l'immagine è un intervallo
- [[Limiti e continuità in più variabili]]: continuità su un compatto di R^n (Analisi 2)
- [[Compattezza in spazi metrici]]: versione su uno spazio metrico compatto (Analisi funzionale)
- [[Spazio topologico compatto]]: versione su un compatto di uno spazio topologico (Istituzioni topologia)

## Porta a
- [[Teorema di Rolle]]: esistono max e min

## Collegati
- [[Punti di estremo locale]]: estremi globali su [a,b]
- [[Punti critici in più variabili]]: estremi assoluti su un compatto
