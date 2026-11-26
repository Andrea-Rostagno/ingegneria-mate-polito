---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Weyl's lemma", "lemma di Weyl per il laplaciano", "ipoellitticità del laplaciano", "soluzione distribuzionale dell'equazione di Laplace"]
tags: [competenza, area/analisi]
---

# Lemma di Weyl

> Una funzione localmente integrabile che risolve l'equazione di Laplace solo nel senso delle distribuzioni coincide quasi ovunque con una funzione armonica (quindi $C^\infty$).

## Definizione / enunciato
**Lemma 3.1.15 (Weyl).** Sia $u\in L^1_{\rm loc}(\Omega)$ una soluzione distribuzionale dell'equazione di Laplace, cioè
$$-\Delta u=0\quad\text{in }\mathcal D'(\Omega),\qquad\text{ovvero}\quad\int_\Omega u\,\Delta\varphi\,dx=0\ \ \forall\varphi\in\mathcal D(\Omega).$$
Allora esiste una funzione armonica $v$ tale che $u=v$ quasi ovunque in $\Omega$.

## Formule chiave
Dimostrazione: con una successione di mollificatori $\{\rho_\varepsilon\}$ si pone $u_\varepsilon:=u*\rho_\varepsilon$. Allora $u_\varepsilon\in C^\infty(\Omega_\varepsilon)$ e
$$-\Delta u_\varepsilon=(-\Delta u)*\rho_\varepsilon=0\quad\text{in }\Omega_\varepsilon,$$
quindi $u_\varepsilon$ è armonica in $\Omega_\varepsilon$, e $u_\varepsilon\to u$ in $L^1(\Omega_\eta)$ per ogni $\eta>\varepsilon$. Il Lemma 3.1.12 (convergenza $L^1_{\rm loc}$ di armoniche) dà $v$ armonica con $v=u$ q.o. su $\Omega_\eta$; si conclude per $\eta\to0$.

## Intuizione
Il laplaciano non "crea" singolarità: qualunque soluzione debolissima (nessuna derivata richiesta) è automaticamente liscia. La convoluzione commuta con le derivate, quindi le regolarizzate restano soluzioni, e la stabilità delle armoniche per convergenza $L^1_{\rm loc}$ trasferisce l'armonicità al limite.

## Come si usa
Giustifica il passaggio dalla formulazione distribuzionale a quella classica per Laplace: basta verificare $\int u\Delta\varphi=0$ per ogni test. È il primo esempio del fenomeno di **guadagno di regolarità** già visto nell'Es. 2.2.2 (in una dimensione: da $u\in C^0$ soluzione in senso integrale a $u\in C^2$), ripreso in forma Sobolev dalla regolarità delle soluzioni deboli.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §3.1, Lemma 3.1.15 (Weyl), dimostrato con mollificatori e Lemma 3.1.12. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (p. 22).

## Prerequisiti
- [[Convergenza di successioni di funzioni armoniche]]: Lemma 3.1.12 sul limite in $L^1_{\rm loc}$
- [[Mollificatori]]: regolarizzazione $u*\rho_\varepsilon$
- [[Derivata distribuzionale]]: significato di $-\Delta u=0$ in $\mathcal D'$

## Collegati
- [[Regolarità delle soluzioni deboli]]: stesso fenomeno per operatori ellittici in $H^1$
