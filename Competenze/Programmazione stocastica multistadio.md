---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["multistage stochastic programming", "MSLP", "multistage stochastic linear program", "programmazione stocastica a più stadi", "problemi multistadio", "funzioni valore annidate", "nested cost-to-go functions", "insieme raggiungibile"]
tags: [competenza, area/ottimizzazione]
---

# Programmazione stocastica multistadio

> Estensione a $T$ stadi: a ogni stadio si osserva un nuovo pezzo di incertezza e si decide, con decisioni che dipendono solo dalla storia passata; il problema si scrive come ricorsione di funzioni valore attese.

## Definizione / enunciato
Con $\xi_{[t]}=[\xi_1,\dots,\xi_t]$ la storia fino a $t$:
$$\min_{\mathbf x_1,\dots,\mathbf x_T}\ \mathbb E\Big[\sum_{t\in[T]}\mathbf c_t(\xi_t)^T\mathbf x_t(\xi_{[t]})\Big]\quad\text{s.t. }\mathbf x_1\in\mathcal X_1,\ \ \mathbf x_t(\xi_{[t]})\in\mathcal X_t\big(\mathbf x_{t-1}(\xi_{[t-1]}),\xi_t\big),\ \ \mathbf x_t(\cdot)\ \mathcal F_t\text{-misurabile},$$
con $\mathcal X_1=\{\mathbf x_1: W_1\mathbf x_1=\mathbf h_1\}$ e $\mathcal X_t(\mathbf x_{t-1},\xi_t)=\{\mathbf x_t: T_{t-1}(\xi_t)\mathbf x_{t-1}+W_t(\xi_t)\mathbf x_t=\mathbf h_t(\xi_t)\}$. Ipotesi: distribuzioni note ed **esogene** (indipendenti dalle decisioni), supporti finiti con $q_t$ realizzazioni ($q_1=1$), vincoli solo fra stadi consecutivi, insiemi ammissibili compatti non vuoti (ricorso relativamente completo) e insiemi raggiungibili limitati.

## Formule chiave
Forma ricorsiva:
$$Q_t(\mathbf x_{t-1},\xi_t)=\min_{\mathbf x_t\in\mathcal X_t(\mathbf x_{t-1},\xi_t)}\ \mathbf c_t(\xi_t)^T\mathbf x_t+\mathcal Q_{t+1}(\mathbf x_t),\qquad \mathcal Q_{t+1}(\mathbf x_t)=\mathbb E_{\xi_{t+1}}\big[Q_{t+1}(\mathbf x_t,\xi_{t+1})\big],$$
con $\mathcal Q_{T+1}\equiv0$ e al primo stadio $v^*=\min_{\mathbf x_1\in\mathcal X_1}\mathbf c_1^T\mathbf x_1+\mathcal Q_2(\mathbf x_1)$. Come nel caso a due stadi, $Q_t(\cdot,\xi_t)$ è convessa lineare a tratti in $(\mathbf h_t,T_{t-1})$, concava in $\mathbf c_t$ e convessa in $\mathbf x_{t-1}$ su $\mathrm{conv}(\mathcal X_{t-1})$, e Lipschitz.

## Intuizione
È una programmazione dinamica in cui lo "stato" è la decisione precedente $\mathbf x_{t-1}$ e il rumore esogeno: la funzione valore attesa riassume tutto il futuro. Se il rumore dipende dallo stadio precedente serve un albero degli scenari; se è indipendente fra stadi l'albero è ricombinante.

## Come si usa
Con albero esplicito si risolve con la decomposizione di Benders annidata; con rumore indipendente e molti stadi si usa SDDP. Esempio delle lezioni: produzione di condizionatori su tre mesi con straordinari e scorte.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Parte IV - Problemi multistadio", sezione Formulazioni. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_2.pdf` (p. 2-4, 16-17).

## Prerequisiti
- [[Programmazione stocastica a due stadi]]: caso $T=2$
- [[Albero degli scenari]]: rappresentazione dell'incertezza a più stadi
- [[Vincoli di non anticipatività]]: decisioni $\mathcal F_t$-misurabili

## Porta a
- [[Decomposizione di Benders annidata]]: soluzione sull'albero
- [[Stochastic dual dynamic programming]]: soluzione per rumore indipendente fra stadi

## Collegati
- [[Equazione di Bellman]]: stessa struttura ricorsiva della programmazione dinamica
- [[Equazione di transizione di stato]]: decisioni sequenziali sotto incertezza
- [[Pianificazione della produzione multiperiodo]]: versione deterministica dei modelli multiperiodo
