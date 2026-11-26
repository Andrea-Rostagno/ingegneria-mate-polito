---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["Fisher's exact test", "test esatto", "p-value esatto", "gene set analysis", "analisi di sovra-rappresentazione", "lady tasting tea", "la signora che assaggia il tè", "fisher.test"]
tags: [competenza, area/statistica]
---

# Test esatto di Fisher

> Test che usa la distribuzione esatta (di solito ipergeometrica) dei conteggi sotto $H_0$: il p-value è la probabilità di tutti i risultati al più tanto probabili quanto quello osservato.

## Definizione / enunciato
Sia $\mathbf X$ un vettore di conteggi con legge nota sotto $H_0$, $p_0(\mathbf x)=P_{H_0}(\mathbf X=\mathbf x)$. Osservato $\mathbf x_{\text{oss}}$ (libro, cap. 5, Def. 5.19):
$$\text{p-value}=\sum_{\mathbf x:\ p_0(\mathbf x)\le p_0(\mathbf x_{\text{oss}})}p_0(\mathbf x).$$
Si rifiuta $H_0$ al livello $\alpha$ se il p-value è minore di $\alpha$.

## Formule chiave
Tabella $2\times2$ (cap. 16, Prop. 16.11): se $N_{11}\sim\mathrm{Bin}(n_{1+},\pi_1)$ e $N_{21}\sim\mathrm{Bin}(n_{2+},\pi_2)$ sono indipendenti e $H_0:\pi_1=\pi_2$ (OR $=1$), condizionatamente al margine $N_{+1}=m$
$$P(N_{11}=k\mid N_{+1}=m)=\frac{\binom{n_{1+}}k\binom{n_{2+}}{m-k}}{\binom nm},$$
ipergeometrica e libera dal valore comune $\pi$; lo stesso vale negli schemi retrospettivo e trasversale sotto indipendenza.

## Intuizione
Condizionando ai margini il parametro di disturbo sparisce e la distribuzione nulla è nota esattamente, senza approssimazioni asintotiche: utile con conteggi piccoli.

## Come si usa
- Gene set analysis (libro, Es. `c05-geni`): 40 geni divisi in classi di 20, 10, 10; una lista di 5 geni contiene $(0,2,3)$. Sotto campionamento casuale $P=\binom{20}0\binom{10}2\binom{10}3/\binom{40}5\approx0.008207$ (con reinserimento la multinomiale darebbe 0.009766, approssimazione rozza). Sommando le probabilità dei vettori con probabilità $\le0.008207$ si ottiene p-value $\approx0.03633$.
- Signora che assaggia il tè (Es. `c16-lady-tea`): 8 tazze, 4 con il latte prima; sotto $H_0$ $P(N_{11}=k)=\binom4k\binom4{4-k}/70$, cioè $1/70,16/70,36/70,16/70,1/70$; indovinarle tutte dà p-value unilaterale $1/70$. In R `fisher.test`, `dhyper`, oppure `extraDistr::dmvhyper`.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 5 §5.5 (Def. 5.19, p. 87) e cap. 16 §16.4 (Prop. 16.11, p. 273). Fonti: `Libri/Modelli statistici/capitoli/cap05.tex`, `cap16.tex`; `magistrale/Modelli statistici/251015A Distribuzioni Multidimensionali.pdf`; `magistrale/Modelli statistici/251217 Capitolo Dati Categorici.pdf`.

## Prerequisiti
- [[Distribuzione ipergeometrica]]: legge nulla dei conteggi
- [[p-value]]: definizione generale

## Porta a
- [[Schemi di campionamento delle tabelle di contingenza]]: schema a margini fissi

## Collegati
- [[Test chi-quadro di indipendenza e omogeneità]]: alternativa asintotica per la stessa tabella
- [[Distribuzione multinomiale]]: approssimazione del campionamento senza reinserimento
- [[Odds ratio]]: $H_0$ equivale a OR $=1$
