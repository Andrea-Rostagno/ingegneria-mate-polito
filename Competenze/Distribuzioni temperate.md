---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["tempered distributions", "S'", "S'(R)", "distribuzione temperata", "tempered distribution"]
tags: [competenza, area/analisi]
---

# Distribuzioni temperate

> I funzionali lineari e continui sullo spazio di Schwartz: una sottoclasse delle distribuzioni abbastanza ampia (contiene $H$, le costanti, la delta, il treno di impulsi) e stabile per la trasformata di Fourier.

## Definizione / enunciato
**Definizione 5.15.** $T:\mathcal S(\mathbb R)\to\mathbb C$ è una **distribuzione temperata** se è lineare e continua:
$$\langle T,\lambda\varphi+\mu\psi\rangle=\lambda\langle T,\varphi\rangle+\mu\langle T,\psi\rangle,\qquad \varphi_n\to\varphi\text{ in }\mathcal S\Rightarrow\langle T,\varphi_n\rangle\to\langle T,\varphi\rangle\quad(5.25)\text{-}(5.26).$$
L'insieme $\mathcal S'(\mathbb R)$ è uno spazio vettoriale. Per linearità basta la continuità in $0$ (Prop. 5.16).
Ogni $T\in\mathcal S'$ ristretta a $\mathcal D$ è una distribuzione, e due temperate diverse restano diverse su $\mathcal D$ (Prop. 5.17, grazie al Lemma 5.18): $\mathcal S'\subset\mathcal D'$.

## Formule chiave
- **Treno di impulsi** (Prop. 5.22): $\big\langle\sum_{k\in\mathbb Z}\delta_k,\varphi\big\rangle=\sum_{k\in\mathbb Z}\varphi(k)$ è temperato; la serie converge perché $|\varphi(k)|\le1/k^2$ per $k$ grande.
- Le funzioni a quadrato sommabile definiscono distribuzioni temperate (cenno in §5.6).

## Intuizione
Il problema: $\langle\mathcal F T,\varphi\rangle:=\langle T,\mathcal F\varphi\rangle$ non ha senso su $\mathcal D$, perché $\mathcal F\varphi$ non ha supporto compatto. Si cambia spazio di test con uno stabile per $\mathcal F$, cioè $\mathcal S$; in cambio si perdono le distribuzioni che crescono troppo all'infinito.

## Come si usa
Per dimostrare che un funzionale è temperato si verifica la continuità con una stima: per il treno di impulsi $|\langle T,\varphi_n\rangle|\le\sup|(1+x^2)\varphi_n(x)|\sum_k\frac1{1+k^2}\to0$ (5.32). Poi si definisce la trasformata per dualità.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §5.4 "Distribuzioni temperate". Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 5 (3).pdf` (pp. 10-14 del PDF); `12 - Trasformata di Fourier di Distribuzioni.pdf` (Richiami di teoria).

## Prerequisiti
- [[Spazio di Schwartz]]: funzionali lineari continui su $\mathcal S$
- [[Distribuzione (funzione generalizzata)]]: sono una sottoclasse di $\mathcal D'$

## Porta a
- [[Trasformata di Fourier di distribuzioni temperate]]: definita per dualità

## Collegati
- Nessuno.
