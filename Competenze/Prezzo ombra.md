---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["shadow price", "prezzi ombra", "interpretazione economica dei moltiplicatori", "analisi di sensitività", "sensitivity analysis", "vincolo attivo", "binding constraint"]
tags: [competenza, area/ottimizzazione]
---

# Prezzo ombra

> Il moltiplicatore di un vincolo misura (a meno del segno) la variazione del valore ottimo per una perturbazione unitaria del termine noto: è il prezzo massimo che conviene pagare per un'unità in più di risorsa.

## Definizione / enunciato
Perturbando un vincolo di uguaglianza, $h_j(\mathbf x)=\epsilon_j$, la lagrangiana è $L(\mathbf x,\boldsymbol\lambda,\boldsymbol\epsilon)=f(\mathbf x)+\sum_i\lambda_i(h_i(\mathbf x)-\epsilon_i)$; all'ottimo $f^*=L^*$ e, per la stazionarietà della lagrangiana,
$$\frac{df^*}{d\epsilon_j}=[\nabla_{\mathbf x}L^*]^T\frac{d\mathbf x^*}{d\epsilon_j}+[\nabla_{\boldsymbol\lambda}L^*]^T\frac{d\boldsymbol\lambda^*}{d\epsilon_j}+\frac{\partial L^*}{\partial\epsilon_j}=-\lambda_j^* .$$
Per un vincolo $g_k(\mathbf x)\le0$ in un problema di minimo il moltiplicatore è $\mu_k\ge0$, e vale lo scarto complementare $\mu_k^*g_k(\mathbf x^*)=0$.

## Formule chiave
Esempio: $\min(x_1-2)^2+(x_2-2)^2$ s.t. $x_1+x_2=b$: ottimo $(b/2,b/2)$, $q(b)=2(b/2-2)^2$, $dq/db=b-4$, e dai moltiplicatori $\lambda^*=4-b$: coincide con $-dq/db$.

## Intuizione
Se la funzione obiettivo è in euro e il vincolo in unità di risorsa (ore macchina, quintali), il moltiplicatore è in euro per unità di risorsa. Non può essere negativo, e se il budget non è usato tutto non si pagherebbe nulla per aumentarlo (moltiplicatore nullo). Nell'esempio con $x_1+x_2\le b$: per $b<4$ il vincolo è attivo, per $b=4$ l'ottimo è il vertice del paraboloide, per $b>4$ l'ottimo $(2,2)$ è interno e non si sposta.

## Come si usa
Trappola: un vincolo non attivo con prezzo ombra nullo in un punto KKT non si può sempre eliminare senza cambiare la soluzione (controesempio grafico delle slide, caso non convesso). Nel mix ottimo di produzione le variabili duali $1.2692$ e $1.0385$ sono i prezzi ombra delle due risorse critiche, $0$ per il vincolo di domanda non attivo. Nell'EOQ multiprodotto il costo di ordinazione è sostituito dal prezzo ombra del vincolo sul numero di ordini, e nella decomposizione duale il prezzo ombra coordina le divisioni.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap6.pdf` (p. 9-13, 21-23); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap7.pdf` (p. 22).
- **Ottimizzazione in condizione di incertezza** (magistrale): stesse slide del capitolo 6 CLUT (anche prezzi ombra ed EOQ); nella decomposizione duale il moltiplicatore $\mu$ è il prezzo della risorsa in denaro per unità, e nel newsvendor multi-prodotto riduce il livello di servizio a $F_i(q_i^*)=(c_i^u-\mu r_i)/(c_i^u+c_i^o)$. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/08 - (Capitolo 6 libro CLUT di Ricerca Operativa) RO_Slide_Chap6.pdf` (p. 9-13, 22-23); `magistrale/Ottimizzazione in condizione di incertezza/07 - Decomposition.pdf` (p. 9, 13).

## Prerequisiti
- [[Moltiplicatori di Lagrange]]: il prezzo ombra è un moltiplicatore

## Porta a
- [[Condizioni di Karush-Kuhn-Tucker]]: segno dei moltiplicatori e scarti complementari
- [[Rilassamento lagrangiano]]: il prezzo ombra coordina la decomposizione

## Collegati
- [[Modello EOQ]]: EOQ multiprodotto con vincolo sugli ordini
- [[Dualità nella programmazione lineare]]: variabili duali come prezzi delle risorse
- [[Struttura dei costi]]: prezzo massimo di una risorsa aggiuntiva
