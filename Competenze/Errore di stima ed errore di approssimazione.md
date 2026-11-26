---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["estimation error", "approximation error", "excess error", "eccesso di errore", "compromesso stima-approssimazione", "approximation-estimation tradeoff"]
tags: [competenza, area/data-ml]
---

# Errore di stima ed errore di approssimazione

> L'eccesso di errore di un'ipotesi rispetto all'errore di Bayes si scompone in una parte dovuta al campione finito (stima) e una dovuta alla povertà della classe $H$ (approssimazione).

## Definizione / enunciato
Sia $H$ una famiglia di funzioni $\mathcal X\to\{0,1\}$. Per $h\in H$:
$$R(h)-R^*=\underbrace{\Big(R(h)-\inf_{h\in H}R(h)\Big)}_{\text{errore di stima}}+\underbrace{\Big(\inf_{h\in H}R(h)-R^*\Big)}_{\text{errore di approssimazione}} .$$
- **Stima:** dipende dall'ipotesi scelta (quindi dal campione); è l'unico termine che si può sperare di limitare con i bound di generalizzazione.
- **Approssimazione:** non è aleatoria, dipende solo da $H$; misura quanto bene l'errore di Bayes è approssimato da $H$ (ricchezza della classe). Non è accessibile perché $R^*$ richiede $D$.

## Formule chiave
Per l'ipotesi $h_0$ restituita da ERM, con $h^*$ migliore in classe:
$$R(h_0)-R(h^*)\le2\sup_{h\in H}|R(h)-\hat R(h)| .$$
La **selezione del modello** consiste nello scegliere $H$ con il compromesso più favorevole fra i due termini.

## Intuizione
Classe più ricca: l'approssimazione cala (si avvicina a $h_{\rm Bayes}$) ma la stima cresce (più ipotesi fra cui sbagliare con pochi dati). Figura delle slide: $h_{\rm Bayes}$ fuori da $H$, $h^*$ il punto di $H$ più vicino, $h$ l'ipotesi effettivamente trovata.

## Come si usa
Nelle reti neurali (slide *Deep Learning*): con classi annidate $\mathcal G_L\subset\mathcal G_{L+1}\subset\dots$ la classe deve essere abbastanza ricca da rappresentare la funzione ottima $g^*$ (grande $L$) ma abbastanza semplice da addestrare con piccolo errore di stima e poca memoria (piccolo $L$); le reti neurali offrono questa costruzione gerarchica. Gli strumenti di scelta sono SRM, cross-validation e regolarizzazione.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/ERM_SRM_CV.pdf` (p. 7-9); `MIA_01W.pdf` (p. 21-24); `neuralnet (3).pdf` (p. 4); `FML.pdf` §4.1.

## Prerequisiti
- [[Errore di Bayes]]: riferimento dell'eccesso di errore
- [[Teorema no free lunch]]: motiva la scelta di una classe ristretta

## Porta a
- [[Empirical risk minimization]]: controlla l'errore di stima
- [[Structural risk minimization]]: sceglie la classe bilanciando i due termini
- [[Regolarizzazione]]: compromesso con un parametro continuo
- [[Rete neurale artificiale]]: famiglia gerarchica di classi controllata dalla profondità

## Collegati
- [[Overfitting e pruning]]: troppo errore di stima (overfitting) o di approssimazione (underfitting)
- [[Bound di apprendimento per H finito (caso inconsistente)]]: il compromesso fra $\hat R_S$ e $\log|H|$
