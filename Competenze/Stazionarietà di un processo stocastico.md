---
tipo: competenza
area: probabilita
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["stationarity", "stazionarietà forte", "stazionarietà in senso stretto", "strict stationarity", "stazionarietà debole", "weak stationarity", "stazionarietà del secondo ordine", "distribuzioni finito-dimensionali"]
tags: [competenza, area/probabilita]
---

# Stazionarietà di un processo stocastico

> Un processo è stazionario se la sua legge non cambia traslando gli indici (forte) o se lo fanno solo i momenti fino a un certo ordine (debole); per i processi gaussiani le due nozioni coincidono all'ordine 2.

## Definizione / enunciato
Un processo stocastico $\{X_t,t\in\mathcal T\}$ è una collezione di variabili aleatorie indicizzate; è completamente caratterizzato dalle **distribuzioni finito-dimensionali** di ogni $(X_{t_1},\dots,X_{t_n})$.
- **Stazionarietà forte**: per ogni $n\in\mathbb N$, ogni $(t_1,\dots,t_n)\in\mathcal T^n$ e ogni $h$ con $t_i+h\in\mathcal T$,
$$f(X_{t_1}=x_1,\dots,X_{t_n}=x_n)=f(X_{t_1+h}=x_1,\dots,X_{t_n+h}=x_n).$$
- **Stazionarietà debole di ordine $s$**: per ogni $n\le s$, $E(X_{t_1}\cdots X_{t_n})=E(X_{t_1+h}\cdots X_{t_n+h})<\infty$.

## Formule chiave
All'ordine 2: $E(X_{t_i})=E(X_{t_i+l})$ e $E(X_{t_i}X_{t_i+l})=E(X_{t_i+h}X_{t_i+l+h})$, quindi media costante e
$$\mathrm{Cov}(X_{t_i},X_{t_i+l})=\gamma(l),\qquad \mathrm{Var}(X_{t_i})=\gamma(0),\qquad \gamma(l)=\gamma(-l).$$
Per un **processo gaussiano**, debole di ordine 2 implica forte, perché le distribuzioni finito-dimensionali sono determinate da media e covarianza.

## Intuizione
Traslare la serie di un tempo $h$ non cambia nulla di ciò che si osserva: la dipendenza tra due istanti è funzione solo della loro distanza (il lag). La serie dei passeggeri aerei, con trend e stagionalità, chiaramente non è stazionaria; lo si diventa spesso dopo aver rimosso trend o stagionalità o dopo trasformazioni.

## Come si usa
- Rumore bianco: stazionario; random walk: no (varianza $t\sigma^2$); AR(1) con $|\alpha|<1$: sì; MA($q$): sempre.
- Nei processi spaziali $s\in S\subseteq\mathbb R^d$ le stesse definizioni valgono con traslazioni $s_i+h$, e la covarianza stazionaria dipende solo dalla distanza.

## Nei corsi
- **Statistica computazionale** (magistrale): definizioni nella parte sulle serie temporali, ripetute per i processi gaussiani spaziali. Fonti: `magistrale/Statistica computazionale/Time Series - Introduzione.pdf` (p. 2-9); `magistrale/Statistica computazionale/Processi Gaussiani.pdf` (p. 13-16).

## Prerequisiti
- [[Vettore gaussiano]]: legge determinata da media e covarianza
- [[Covarianza]]: momento del secondo ordine fra due istanti

## Porta a
- [[Funzione di autocorrelazione]]: definita sotto stazionarietà
- [[Modello AR(1)]]: stazionario se $|\alpha|<1$
- [[Processo gaussiano]]: stazionarietà dei processi spaziali

## Collegati
- [[Distribuzione stazionaria di una DTMC]]: contrasto, lì è stazionaria la legge di un singolo stato della catena
- [[Rumore bianco]]: esempio più semplice di processo stazionario
