---
tipo: competenza
area: probabilita
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["stick breaking", "bastone spezzato", "broken stick", "spaziature delle uniformi", "uniform spacings", "spaziature", "Dir(1,...,1)"]
tags: [competenza, area/probabilita]
---

# Stick breaking

> Spezzare a caso un bastone di lunghezza 1 produce pezzi le cui lunghezze hanno distribuzione di Dirichlet: in $d$ punti uniformi si ottiene $\mathrm{Dir}(1,\dots,1)$, staccando frazioni Beta successive una Dirichlet qualsiasi.

## Definizione / enunciato
Siano $U_1,\dots,U_d\overset{iid}\sim\mathrm{Unif}(0,1)$ con statistiche d'ordine $U_{(1)}\le\dots\le U_{(d)}$. Le **spaziature** sono $\Delta_1=U_{(1)}$, $\Delta_k=U_{(k)}-U_{(k-1)}$ ($k=2,\dots,d$), $\Delta_D=1-U_{(d)}$, con $D=d+1$. Allora (libro, cap. 6, Teorema 6.11)
$$(\Delta_1,\dots,\Delta_D)\sim\mathrm{Dir}(1,1,\dots,1),$$
uniforme sul simplesso; $(\Delta_1,\dots,\Delta_d)$ ha densità costante $d!$ su $S_d$.

## Formule chiave
- Densità delle statistiche d'ordine (Lemma 6.10): per $X_i$ i.i.d. con densità continua $f$, $f(x_{(1)},\dots,x_{(n)})=n!\prod_{i=1}^nf(x_{(i)})$ su $x_{(1)}<\dots<x_{(n)}$ (l'ordinamento è una funzione $n!$ a 1 con jacobiano di modulo 1).
- **Stick breaking generale**: $P_1=V_1$, $P_2=(1-V_1)V_2$, ..., $P_D=(1-V_1)\cdots(1-V_{D-1})$; se le $V_k$ sono Beta indipendenti con $V_k\sim\mathrm{Beta}(\alpha_k,\ \alpha_{k+1}+\dots+\alpha_D)$, allora $(P_1,\dots,P_D)\sim\mathrm{Dir}(\alpha_1,\dots,\alpha_D)$.

## Intuizione
Con un taglio solo ($d=1$) i due pezzi sono $U$ e $1-U$, entrambi uniformi; con più tagli i pezzi sono scambiabili e ugualmente distribuiti, perciò la loro legge non privilegia nessun punto del simplesso. La versione sequenziale è la base della statistica bayesiana non parametrica.

## Come si usa
Per simulare una Dirichlet in alternativa alla rappresentazione di Rényi: si estraggono Beta successive e si moltiplicano i "resti". Per verificare l'uniformità: la densità di $(\Delta_1,\dots,\Delta_d)$ si ottiene dalla densità $d!$ delle statistiche d'ordine con una trasformazione lineare di jacobiano 1. La dimostrazione per $D=3$ dello stick breaking generale è un esercizio del libro.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 6, §6.5 (Lemma 6.10, Teorema 6.11, p. 100). Il docente cita Gasparini (2013) per la densità delle statistiche d'ordine. Fonti: `Libri/Modelli statistici/capitoli/cap06.tex`; `magistrale/Modelli statistici/251015B Dirichlet.pdf` (esercizio sullo stick breaking).

## Prerequisiti
- [[Statistiche d'ordine]]: densità congiunta $n!\prod f$
- [[Distribuzione uniforme continua]]: i tagli
- [[Distribuzione di Dirichlet]]: legge dei pezzi

## Porta a
- [[Coniugatezza Dirichlet-multinomiale]]: prior uniforme $\mathrm{Dir}(1,\dots,1)$ sulle probabilità

## Collegati
- [[Rappresentazione di Rényi]]: altra costruzione della Dirichlet
- [[Distribuzione Beta]]: frazioni staccate a ogni passo
