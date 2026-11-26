---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["PACF", "partial autocorrelation function", "funzione di autocorrelazione parziale", "proprietà di Markov di ordine h", "catena di Markov di ordine h", "Markov property of order h"]
tags: [competenza, area/statistica]
---

# Autocorrelazione parziale

> Autocorrelazione tra $X_{t_i}$ e $X_{t_i+l}$ depurata dall'effetto delle variabili intermedie; per un processo markoviano di ordine $h$ si annulla oltre il lag $h$.

## Definizione / enunciato
Per serie stazionarie
$$\psi(l)=\frac{\mathrm{Cov}(X_{t_i},X_{t_i+l}\mid X_{t_i+1},\dots,X_{t_i+l-1})}{\mathrm{Var}(X_{t_i}\mid X_{t_i+1},\dots,X_{t_i+l-1})},$$
per quelle non stazionarie
$$\psi_{t_i}(l)=\frac{\mathrm{Cov}(X_{t_i},X_{t_i+l}\mid X_{t_i+1},\dots,X_{t_i+l-1})}{\sqrt{\mathrm{Var}(X_{t_i+l}\mid\cdot)\mathrm{Var}(X_{t_i}\mid\cdot)}}.$$
**Proprietà di Markov di ordine $h$**: $f(X_{t_i}=x_i\mid X_{t_{i-1}},\dots,X_{t_1})=f(X_{t_i}=x_i\mid X_{t_{i-1}},\dots,X_{t_{i-h}})$; con $h=1$ si ha la fattorizzazione $f(\mathbf x)=f(x_1)\prod_{i=2}^nf(x_i\mid x_{i-1})$.

## Formule chiave
Per un processo markoviano di ordine $h$ la PACF si annulla per lag maggiori di $h$: con $\mathbf x_{i+1}^{i+h+c-1}$ gli istanti intermedi,
$$f(x_{i+h+c},x_i\mid\mathbf x_{i+1}^{i+h+c-1})=f(x_{i+h+c}\mid\mathbf x_{i+1}^{i+h+c-1})\,f(x_i\mid\mathbf x_{i+1}^{i+h+c-1}),$$
cioè $x_{i+h+c}$ e $x_i$ sono indipendenti dato l'intermezzo, e l'integrale della covarianza condizionata si fattorizza in due termini nulli.

## Intuizione
Anche un processo markoviano può avere autocorrelazione $\rho(h)\ne0$ a ogni lag (la dipendenza si propaga), ma la parte "diretta" tra istanti lontani passa tutta per quelli intermedi: tolta quella, non resta nulla. Per questo la PACF dell'esperimento fMRI è quasi nulla dopo il primo o secondo lag, mentre l'ACF no.

## Come si usa
Diagnostica dell'ordine di un AR: la PACF di un AR($p$) si annulla per $k>p$ (taglio netto dopo $p$). Per il random walk $\psi_t(1)=\rho_t(1)=1/\sqrt{1+1/t}$ e $\psi_t(k)=0$ per $k>1$. Per un AR(1) è "inutile" calcolarla, essendo markoviano del primo ordine.

## Nei corsi
- **Statistica computazionale** (magistrale): "Processi stocastici XI-XII" e "Proprietà di Markov I-V". Fonti: `magistrale/Statistica computazionale/Time Series - Introduzione.pdf` (p. 16-22, 28-29); `magistrale/Statistica computazionale/Time Series Modelli.pdf` (p. 19).

## Prerequisiti
- [[Funzione di autocorrelazione]]: versione non depurata
- [[Catena di Markov a tempo discreto]]: proprietà di Markov, qui estesa all'ordine $h$
- [[Condizionamento di un vettore gaussiano]]: covarianze condizionate nel caso gaussiano

## Porta a
- [[Modello AR(p)]]: PACF nulla oltre $p$

## Collegati
- [[Indipendenza condizionata nelle reti bayesiane]]: passato lontano e futuro indipendenti dato l'intermezzo
- [[Passeggiata aleatoria gaussiana]]: esempio con PACF nulla oltre il lag 1
