---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Numerical opt, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["KKT conditions", "condizioni KKT", "Karush-Kuhn-Tucker", "scarti complementari", "complementary slackness", "ammissibilità duale", "cono attivo", "active set", "insieme attivo", "strict complementarity", "complementarità stretta"]
tags: [competenza, area/ottimizzazione]
---

# Condizioni di Karush-Kuhn-Tucker

> Estensione del teorema dei moltiplicatori ai vincoli di disuguaglianza: stazionarietà della lagrangiana, moltiplicatori non negativi per le disuguaglianze e scarti complementari. Necessarie sotto constraint qualification, sufficienti nel caso convesso.

## Definizione / enunciato
Problema $\min f(\mathbf x)$ s.t. $h_i(\mathbf x)=0$ ($i\in[m]$), $g_k(\mathbf x)\le0$ ($k\in[l]$).

**Teorema (KKT).** Se $f,h_i,g_k$ sono $C^1$, $\mathbf x^*$ ammissibile è minimo locale e vale una constraint qualification, esistono $\lambda_i^*$ e $\mu_k^*\ge0$ con
$$\nabla f(\mathbf x^*)+\sum_{i=1}^m\lambda_i^*\nabla h_i(\mathbf x^*)+\sum_{k=1}^l\mu_k^*\nabla g_k(\mathbf x^*)=\mathbf 0,\qquad\mu_k^*g_k(\mathbf x^*)=0,\ k=1,\dots,l .$$

**Teorema (caso convesso con vincoli lineari $\mathbf a_i^T\mathbf x\le b_i$, $f$ convessa differenziabile).** Sono equivalenti: (1) $\hat{\mathbf x}$ ottimo; (2) $-\nabla f(\hat{\mathbf x})\in A(\hat{\mathbf x})=\mathrm{cone}\{\mathbf a_i:i\in I_a(\hat{\mathbf x})\}$ (cono attivo); (3) esiste $\hat{\boldsymbol\mu}\ge\mathbf 0$ con $\nabla f(\hat{\mathbf x})+\sum_i\hat\mu_i\mathbf a_i=\mathbf 0$ e $\hat\mu_i(b_i-\mathbf a_i^T\hat{\mathbf x})=0$.

## Formule chiave
$$L(\mathbf x,\boldsymbol\lambda,\boldsymbol\mu)=f(\mathbf x)+\sum_i\lambda_ih_i(\mathbf x)+\sum_k\mu_kg_k(\mathbf x).$$
Dimostrazione generale: se $\mathbf x^*$ è minimo locale l'insieme delle direzioni ammissibili di discesa è vuoto; scrivendo ogni uguaglianza come due disuguaglianze, il lemma di Farkas dà $-\nabla f=\sum_{i\in I_a}\mu_i\nabla g_i+\sum_{i\in E}(\lambda_i^+-\lambda_i^-)\nabla h_i$, con $\lambda_i=\lambda_i^+-\lambda_i^-$ libero.

## Intuizione
Se un vincolo non è attivo il moltiplicatore è nullo; se il moltiplicatore è positivo il vincolo è attivo. Con un vincolo attivo ci si può muovere anche verso l'interno: le direzioni ammissibili soddisfano $\nabla g_k(\mathbf x^*)^T\boldsymbol\delta\le0$, e all'ottimo nessuna è anche di discesa.

## Come si usa
Esempio delle slide: $\min x_1+x_2$ s.t. $x_1x_2\ge4$: in $\mathbf x^*=(2,2)$, $\nabla g=(-2,-2)$ e $\mu^*=0.5$. Analisi per casi per $\min x_1^2+x_2^2$ s.t. $x_1\ge0$, $x_2\ge3$, $x_1+x_2=4$: caso $\mu_1=\mu_2=0$ dà $(2,2)$, che viola $x_2\ge3$; caso entrambi attivi dà $(0,3)$, non ammissibile; caso $\mu_1\ne0$ dà $\mu_1=-8<0$; caso $\mu_2\ne0$ dà $x=(1,3)$, $\lambda=-2$, $\mu_2=4$: ottimo globale. Le KKT si usano direttamente solo su problemi piccoli o strutturati; i metodi numerici sono ottimizzatori locali, salvo nel caso convesso.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap6.pdf` (p. 12-20, 30-34, 38-39).
- **Numerical opt** (magistrale): problema $\min f$ s.t. $h(x)=0$, $g(x)\le0$, con $\mathcal L=f+\lambda^Th+\mu^Tg$ e insieme attivo $\mathcal A(x)=\{j:g_j(x)=0\}$. Se $x^*$ è regolare (LICQ) esistono unici $\lambda^*,\mu^*$ con
  - $\nabla_x\mathcal L=0$, $h(x^*)=0$, $g(x^*)\le0$;
  - $\mu^*\ge0$ e $\mu_j^*=0$ per $j\notin\mathcal A(x^*)$, cioè la complementarità $(\mu^*)^Tg(x^*)=0$.

  Si ha **complementarità stretta** se $\mu_j^*>0$ per ogni vincolo attivo: per ogni $j$ esattamente uno tra $\mu_j^*$ e $g_j(x^*)$ è nullo, e i metodi numerici si comportano meglio. Esempi di insiemi attivi su $[1,2]$ e su $[0,1]^2$. DS §11 usa invece $\mathcal L=f-\lambda^Tg-\mu^Th$ con $g\ge0$. Il caso QP con soli vincoli di uguaglianza è in [[Matrice KKT]]. Fonti: `magistrale/Numerical opt/Pieraccini/Part_5_Constrained_Optimization_General_Theory_and_Proj_Grad.pdf` (p. 15-18); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§11, eq. 73-79).
- **Ottimizzazione in condizione di incertezza** (magistrale): stesse slide del capitolo 6 CLUT incluse nel materiale (KKT, constraint qualification, controesempio, dimostrazione via Farkas); nelle slide robuste le KKT risolvono il problema interno del portafoglio media-varianza con incertezza ellissoidale sui rendimenti. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/08 - (Capitolo 6 libro CLUT di Ricerca Operativa) RO_Slide_Chap6.pdf` (p. 12-21, 30-39); `magistrale/Ottimizzazione in condizione di incertezza/06b - WorstCaseRobust.pdf` (p. 17).

## Prerequisiti
- [[Moltiplicatori di Lagrange]]: caso con soli vincoli di uguaglianza
- [[Lemma di Farkas]]: esistenza dei moltiplicatori
- [[Cono duale e cono polare]]: direzioni ammissibili come polare del cono attivo
- [[Constraint qualification]]: ipotesi di validità

## Porta a
- [[Dualità lagrangiana]]: i moltiplicatori diventano variabili duali

## Collegati
- [[Prezzo ombra]]: segno e scarti complementari in chiave economica
- [[Convessità di funzioni differenziabili]]: sufficienza nel caso convesso
- [[Problema di ottimizzazione convessa]]: le KKT sono necessarie e sufficienti
