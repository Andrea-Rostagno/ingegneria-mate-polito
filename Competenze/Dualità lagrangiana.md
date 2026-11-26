---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Dinamiche su network, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["Lagrangian duality", "dualità debole", "weak duality", "funzione duale", "dual function", "problema duale", "dual problem", "gap di dualità", "duality gap", "dualizzazione", "variabili duali"]
tags: [competenza, area/ottimizzazione]
---

# Dualità lagrangiana

> Dualizzando i vincoli "difficili" con moltiplicatori non negativi si ottiene una funzione duale concava che dà un lower bound sull'ottimo primale (dualità debole); il problema duale cerca il bound migliore.

## Definizione / enunciato
Primale (P): $\min f(\mathbf x)$ s.t. $g_i(\mathbf x)\le0$ ($i\in I$), $\mathbf x\in S\subseteq\mathbb R^n$, con $S$ qualsiasi (anche discreto, non convesso) e nessuna ipotesi su $f$, $g_i$. Lagrangiana e **funzione duale**:
$$L(\mathbf x,\boldsymbol\mu)=f(\mathbf x)+\boldsymbol\mu^T\mathbf g(\mathbf x),\qquad w(\boldsymbol\mu)=\min_{\mathbf x\in S}L(\mathbf x,\boldsymbol\mu).$$
**Teorema (dualità debole).** $w(\boldsymbol\mu)\le f(\mathbf x^*)$ per ogni $\boldsymbol\mu\ge\mathbf 0$.

**Problema duale** (D): $\max_{\boldsymbol\mu\ge\mathbf 0}w(\boldsymbol\mu)$; **gap di dualità** $\nu(P)-\nu(D)\ge0$, spesso positivo nei problemi non convessi.

## Formule chiave
Prova della dualità debole, con $\boldsymbol\mu\ge\mathbf 0$:
$$\nu(P)\ge\min_{\mathbf x\in S,\ \boldsymbol\mu^T\mathbf g\le0}f(\mathbf x)\ge\min_{\mathbf x\in S,\ \boldsymbol\mu^T\mathbf g\le0}f(\mathbf x)+\boldsymbol\mu^T\mathbf g(\mathbf x)\ge\min_{\mathbf x\in S}f(\mathbf x)+\boldsymbol\mu^T\mathbf g(\mathbf x).$$
**Teorema.** $w$ è concava (inviluppo inferiore di funzioni affini in $\boldsymbol\mu$). **Teorema (subgradienti).** Se $\hat{\mathbf x}$ risolve il problema rilassato in $\hat{\boldsymbol\mu}$, allora $\mathbf g(\hat{\mathbf x})$ è un subgradiente di $w$ in $\hat{\boldsymbol\mu}$: $w(\boldsymbol\mu)\le w(\hat{\boldsymbol\mu})+\mathbf g(\hat{\mathbf x})^T(\boldsymbol\mu-\hat{\boldsymbol\mu})$.

## Intuizione
Il vincolo dualizzato diventa una penalità con prezzo $\boldsymbol\mu$; per $\boldsymbol\mu\ge\mathbf 0$ la penalità non è mai positiva sui punti ammissibili, quindi il rilassato sottostima. Derivare "ingenuamente" $w$ dà $\mathbf g(\hat{\mathbf x})$ come gradiente, ma questo ignora che la soluzione rilassata cambia con $\boldsymbol\mu$, soprattutto quando non è unica: per questo si ha solo un subgradiente.

## Come si usa
Esempio QP: $\min x_1^2+x_2^2$ s.t. $x_1+x_2\ge4$, $x\ge0$: $w(\mu)=\min_{x_1\ge0}(x_1^2-\mu x_1)+\min_{x_2\ge0}(x_2^2-\mu x_2)+4\mu=-\frac12\mu^2+4\mu$, massimo in $\mu^*=4$ con $w(4)=8=f^*$; dualizzare il vincolo di accoppiamento separa le variabili. Esempio discreto: $\min\mathbf c^T\mathbf x$ s.t. $\mathbf a^T\mathbf x\ge b$, $\mathbf x\in\{\mathbf x_1,\dots,\mathbf x_m\}$: $w(\mu)=\min_j[(b-\mathbf a^T\mathbf x_j)\mu+\mathbf c^T\mathbf x_j]$ è poliedrale, concava, non differenziabile dove il rilassato ha più soluzioni ottime. Il bound serve anche a certificare la subottimalità di una soluzione ammissibile.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap6.pdf` (p. 40-42, 45-48).
- **Dinamiche su network** (magistrale): applicata ai flussi su rete con vincoli di uguaglianza $Bf=\nu$: un moltiplicatore libero $\lambda_i$ per nodo, Lagrangiana separabile arco per arco, funzione duale $D(\lambda,\nu)=\sum_i\lambda_i\nu_i-\sum_e\psi^*_e(\lambda_{\theta(e)}-\lambda_{\kappa(e)})$ (sempre concava) con $\psi^*_e$ trasformata di Fenchel. Con costi convessi le condizioni di complementary slackness caratterizzano insieme ottimo primale, ottimo duale e assenza di gap; nelle reti elettriche i moltiplicatori ottimi sono le tensioni. Fonti: `magistrale/Dinamiche su network/slide/Slides-4-NetworkFlowOptimization.pdf` (pp. 12-19); `magistrale/Dinamiche su network/slide/Slides-6-Flows-Reversibility.pdf` (p. 39).
- **Ottimizzazione in condizione di incertezza** (magistrale): stesse slide del capitolo 6 CLUT (dualità debole, funzione duale concava e non differenziabile, approccio numerico con il subgradiente); la funzione duale è la base della decomposizione duale e del progressive hedging. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/08 - (Capitolo 6 libro CLUT di Ricerca Operativa) RO_Slide_Chap6.pdf` (p. 40-42, 46-49).

## Prerequisiti
- [[Condizioni di Karush-Kuhn-Tucker]]: i moltiplicatori diventano variabili duali
- [[Operazioni che preservano la convessità]]: minimo puntuale di affini è concavo

## Porta a
- [[Teorema di dualità forte]]: quando il gap è nullo
- [[Dualità nella programmazione lineare]]: il duale di un LP
- [[Rilassamento lagrangiano]]: uso algoritmico della funzione duale
- [[Ottimizzazione convessa di flussi su rete]]: moltiplicatori come potenziali dei nodi (Dinamiche su network)

## Collegati
- [[Subgradiente]]: $\mathbf g(\hat{\mathbf x})$ è un subgradiente di $w$
- [[Metodo del subgradiente]]: massimizzazione della funzione duale
- [[Rilassamento continuo]]: altro modo di ottenere bound
